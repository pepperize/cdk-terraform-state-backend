import { aws_dynamodb, aws_s3 } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface TerraformStateBackendProps {
  readonly bucketName: string;
  readonly tableName: string;
}

export class TerraformStateBackend extends Construct {
  readonly bucket: aws_s3.IBucket;
  readonly table: aws_dynamodb.ITable;

  public constructor(scope: Construct, id: string, props: TerraformStateBackendProps) {
    super(scope, id);

    const { bucketName, tableName } = props;

    this.bucket = new aws_s3.Bucket(this, "Bucket", {
      bucketName: bucketName,
      versioned: true,
      encryption: aws_s3.BucketEncryption.KMS_MANAGED,
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
    });

    this.table = new aws_dynamodb.Table(scope, "Table", {
      tableName: tableName,
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: "LockID",
        type: aws_dynamodb.AttributeType.STRING,
      },
      encryption: aws_dynamodb.TableEncryption.DEFAULT,
      pointInTimeRecovery: true,
    });
  }
}
