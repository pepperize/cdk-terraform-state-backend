# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### TerraformStateBackend <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend" id="pepperizecdkterraformstatebackendterraformstatebackend"></a>

#### Initializers <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer" id="pepperizecdkterraformstatebackendterraformstatebackendinitializer"></a>

```typescript
import { TerraformStateBackend } from '@pepperize/cdk-terraform-state-backend'

new TerraformStateBackend(scope: Construct, id: string, props: TerraformStateBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkterraformstatebackendterraformstatebackendparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdkterraformstatebackendterraformstatebackendparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkterraformstatebackendterraformstatebackendparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps`](#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.parameter.scope" id="pepperizecdkterraformstatebackendterraformstatebackendparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.parameter.id" id="pepperizecdkterraformstatebackendterraformstatebackendparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.parameter.props" id="pepperizecdkterraformstatebackendterraformstatebackendparameterprops"></a>

- *Type:* [`@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps`](#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#pepperizecdkterraformstatebackendterraformstatebackendpropertybucket)<span title="Required">*</span> | [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket) | *No description.* |
| [`policy`](#pepperizecdkterraformstatebackendterraformstatebackendpropertypolicy)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.IPolicy`](#aws-cdk-lib.aws_iam.IPolicy) | *No description.* |
| [`table`](#pepperizecdkterraformstatebackendterraformstatebackendpropertytable)<span title="Required">*</span> | [`aws-cdk-lib.aws_dynamodb.ITable`](#aws-cdk-lib.aws_dynamodb.ITable) | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.bucket" id="pepperizecdkterraformstatebackendterraformstatebackendpropertybucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket)

---

##### `policy`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.policy" id="pepperizecdkterraformstatebackendterraformstatebackendpropertypolicy"></a>

```typescript
public readonly policy: IPolicy;
```

- *Type:* [`aws-cdk-lib.aws_iam.IPolicy`](#aws-cdk-lib.aws_iam.IPolicy)

---

##### `table`<sup>Required</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.table" id="pepperizecdkterraformstatebackendterraformstatebackendpropertytable"></a>

```typescript
public readonly table: ITable;
```

- *Type:* [`aws-cdk-lib.aws_dynamodb.ITable`](#aws-cdk-lib.aws_dynamodb.ITable)

---


## Structs <a name="Structs" id="structs"></a>

### TerraformStateBackendProps <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps" id="pepperizecdkterraformstatebackendterraformstatebackendprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TerraformStateBackendProps } from '@pepperize/cdk-terraform-state-backend'

const terraformStateBackendProps: TerraformStateBackendProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucketName`](#pepperizecdkterraformstatebackendterraformstatebackendpropspropertybucketname) | `string` | *No description.* |
| [`policyName`](#pepperizecdkterraformstatebackendterraformstatebackendpropspropertypolicyname) | `string` | *No description.* |
| [`tableName`](#pepperizecdkterraformstatebackendterraformstatebackendpropspropertytablename) | `string` | *No description.* |

---

##### `bucketName`<sup>Optional</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.bucketName" id="pepperizecdkterraformstatebackendterraformstatebackendpropspropertybucketname"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* `string`

---

##### `policyName`<sup>Optional</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.policyName" id="pepperizecdkterraformstatebackendterraformstatebackendpropspropertypolicyname"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.tableName" id="pepperizecdkterraformstatebackendterraformstatebackendpropspropertytablename"></a>

```typescript
public readonly tableName: string;
```

- *Type:* `string`

---



