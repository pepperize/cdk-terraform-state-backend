import { AttributeType, BillingMode, ITable, Table, TableEncryption } from "@aws-cdk/aws-dynamodb";
import { BlockPublicAccess, Bucket, BucketEncryption, IBucket } from "@aws-cdk/aws-s3";
import { Construct } from "@aws-cdk/core";

export interface TerraformStateBackendProps {
  readonly bucketName: string;
  readonly tableName: string;
}

export class TerraformStateBackend extends Construct {
  readonly bucket: IBucket;
  readonly table: ITable;

  public constructor(scope: Construct, id: string, props: TerraformStateBackendProps) {
    super(scope, id);

    const { bucketName, tableName } = props;

    this.bucket = new Bucket(this, "Bucket", {
      bucketName: bucketName,
      versioned: true,
      encryption: BucketEncryption.KMS_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    this.table = new Table(this, "Table", {
      tableName: tableName,
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: "LockID",
        type: AttributeType.STRING,
      },
      encryption: TableEncryption.DEFAULT,
      pointInTimeRecovery: true,
    });
  }
}
