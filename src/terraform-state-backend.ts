import { AttributeType, BillingMode, ITable, Table, TableEncryption } from "@aws-cdk/aws-dynamodb";
import { BlockPublicAccess, Bucket, BucketEncryption, IBucket } from "@aws-cdk/aws-s3";
import { Construct, Stack } from "@aws-cdk/core";

export interface TerraformStateBackendProps {
  readonly namePrefix?: string;
}

export class TerraformStateBackend extends Construct {
  readonly bucket: IBucket;
  readonly table: ITable;

  public constructor(scope: Stack, id: string, props: TerraformStateBackendProps) {
    super(scope, id);

    const namePrefix = props.namePrefix || "terraform-state-backend";

    this.bucket = new Bucket(this, "Bucket", {
      bucketName: `${namePrefix}-${scope.account}-${scope.region}`,
      versioned: true,
      encryption: BucketEncryption.KMS_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    this.table = new Table(this, "Table", {
      tableName: `${namePrefix}-${scope.account}`,
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
