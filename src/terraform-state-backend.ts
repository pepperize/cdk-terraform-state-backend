import { PrivateBucket } from "@pepperize/cdk-private-bucket";
import { aws_dynamodb, aws_iam, aws_s3, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface TerraformStateBackendProps {
  readonly bucketName?: string;
  readonly policyName?: string;
  readonly tableName?: string;
}

export class TerraformStateBackend extends Construct {
  readonly bucket: aws_s3.IBucket;
  readonly table: aws_dynamodb.ITable;
  readonly policy: aws_iam.IPolicy;

  public constructor(scope: Construct, id: string, props: TerraformStateBackendProps) {
    super(scope, id);

    const { bucketName, policyName, tableName } = props;

    this.bucket = new PrivateBucket(this, "Bucket", {
      bucketName: bucketName ?? `terraform-state-backend-${Stack.of(this).account}-${Stack.of(this).region}`,
      versioned: true,
    });

    this.table = new aws_dynamodb.Table(this, "Table", {
      tableName: tableName ?? `terraform-state-backend`,
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: "LockID",
        type: aws_dynamodb.AttributeType.STRING,
      },
      encryption: aws_dynamodb.TableEncryption.DEFAULT,
      pointInTimeRecovery: true,
    });

    this.policy = new aws_iam.Policy(this, "Policy", {
      policyName: policyName ?? `terraform-state-backend`,
      statements: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: ["s3:ListBucket", "s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
          resources: [`${this.bucket.bucketArn}`, `${this.bucket.bucketArn}/*`],
        }),
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: ["dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:DeleteItem"],
          resources: [`${this.table.tableArn}`],
        }),
      ],
    });
  }
}
