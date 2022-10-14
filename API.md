# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformStateBackend <a name="TerraformStateBackend" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer"></a>

```typescript
import { TerraformStateBackend } from '@pepperize/cdk-terraform-state-backend'

new TerraformStateBackend(scope: Construct, id: string, props: TerraformStateBackendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps">TerraformStateBackendProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps">TerraformStateBackendProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct"></a>

```typescript
import { TerraformStateBackend } from '@pepperize/cdk-terraform-state-backend'

TerraformStateBackend.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.IPolicy</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.policy"></a>

```typescript
public readonly policy: IPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IPolicy

---

##### `table`<sup>Required</sup> <a name="table" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---


## Structs <a name="Structs" id="Structs"></a>

### TerraformStateBackendProps <a name="TerraformStateBackendProps" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.Initializer"></a>

```typescript
import { TerraformStateBackendProps } from '@pepperize/cdk-terraform-state-backend'

const terraformStateBackendProps: TerraformStateBackendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackendProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---



