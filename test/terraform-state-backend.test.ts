import { Template } from "aws-cdk-lib/assertions";
import { App, Aspects, Stack } from "aws-cdk-lib";
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
              SSEAlgorithm: "aws:kms",
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
});
