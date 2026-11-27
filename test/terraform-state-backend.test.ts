import { App, Aspects, aws_iam, Duration, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { AwsSolutionsChecks } from "cdk-nag";
import { TerraformStateBackend } from "../src";

describe("TerraformStateBackend", () => {
  it("Should created bucket that is versioned, encrypted and blocks public access", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });

    // When
    new TerraformStateBackend(stack, "TerraformStateBackend", {
      bucketName: "terraform-state-backend",
      tableName: "terraform-state-backend",
    });
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::S3::Bucket", {
      VersioningConfiguration: {
        Status: "Enabled",
      },
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  it("Should comply to best practices", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });

    // When
    new TerraformStateBackend(stack, "TerraformStateBackend", {
      bucketName: "terraform-state-backend",
      tableName: "terraform-state-backend",
    });

    // Then
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
  });

  it("Should match snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });

    // When
    new TerraformStateBackend(stack, "TerraformStateBackend", {
      bucketName: "terraform-state-backend",
      tableName: "terraform-state-backend",
    });
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });

  it("Should attach policy to a role", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });
    const backend = new TerraformStateBackend(stack, "TerraformStateBackend", {});
    const role = new aws_iam.Role(stack, "Role", {
      assumedBy: new aws_iam.AccountRootPrincipal(),
    });

    // When
    role.attachInlinePolicy(backend.policy);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::IAM::Policy", {
      Roles: [{ Ref: stack.getLogicalId(role.node.defaultChild as aws_iam.CfnRole) }],
    });
  });

  it("Should add lifecycle rules to the bucket", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });
    const backend = new TerraformStateBackend(stack, "TerraformStateBackend", {});

    // When
    backend.bucket.addLifecycleRule({ expiration: Duration.days(7) });
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::S3::Bucket", {
      LifecycleConfiguration: {
        Rules: [{ ExpirationInDays: 7, Status: "Enabled" }],
      },
    });
  });

  const lockStatement = {
    Action: ["dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:DeleteItem"],
    Effect: "Allow",
    Resource: Match.anyValue(),
  };

  it("Should grant read access to state and lock table", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });
    const backend = new TerraformStateBackend(stack, "TerraformStateBackend", {});
    const role = new aws_iam.Role(stack, "Role", {
      assumedBy: new aws_iam.AccountRootPrincipal(),
    });

    // When
    backend.grantRead(role);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: ["s3:ListBucket", "s3:GetObject"],
            Effect: "Allow",
            Resource: Match.anyValue(),
          },
          lockStatement,
        ],
      },
      Roles: [{ Ref: stack.getLogicalId(role.node.defaultChild as aws_iam.CfnRole) }],
    });
  });

  it("Should grant read write access to state and lock table", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "stack", {
      env: {
        account: "0",
        region: "us-east-1",
      },
    });
    const backend = new TerraformStateBackend(stack, "TerraformStateBackend", {});
    const role = new aws_iam.Role(stack, "Role", {
      assumedBy: new aws_iam.AccountRootPrincipal(),
    });

    // When
    backend.grantReadWrite(role);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: ["s3:ListBucket", "s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
            Effect: "Allow",
            Resource: Match.anyValue(),
          },
          lockStatement,
        ],
      },
      Roles: [{ Ref: stack.getLogicalId(role.node.defaultChild as aws_iam.CfnRole) }],
    });
  });
});
