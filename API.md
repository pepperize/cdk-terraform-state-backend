# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformStateBackend <a name="TerraformStateBackend" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable

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
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantRead">grantRead</a></code> | Grants read access to the state bucket and lock table, e.g. for `terraform plan`. |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantReadWrite">grantReadWrite</a></code> | Grants read write access to the state bucket and lock table, e.g. for `terraform apply`. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `grantRead` <a name="grantRead" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grants read access to the state bucket and lock table, e.g. for `terraform plan`.

Includes lock table writes, because terraform acquires the state lock on plan.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantReadWrite` <a name="grantReadWrite" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantReadWrite"></a>

```typescript
public grantReadWrite(grantee: IGrantable): Grant
```

Grants read write access to the state bucket and lock table, e.g. for `terraform apply`.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.grantReadWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct"></a>

```typescript
import { TerraformStateBackend } from '@pepperize/cdk-terraform-state-backend'

TerraformStateBackend.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | *No description.* |
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
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-terraform-state-backend.TerraformStateBackend.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

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



