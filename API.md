[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/pepperize/cdk-terraform-state-backend?style=flat-square)](https://github.com/pepperize/cdk-terraform-state-backend/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-terraform-state-backend?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-terraform-state-backend)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-terraform-state-backend?style=flat-square)](https://pypi.org/project/pepperize.cdk-terraform-state-backend/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.TerraformStateBackend?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.TerraformStateBackend/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-terraform-state-backend?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-terraform-state-backend/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pepperize/cdk-terraform-state-backend/release.yml?banch=main&label=release&style=flat-square)](https://github.com/pepperize/cdk-terraform-state-backend/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-terraform-state-backend?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-terraform-state-backend/releases)

# AWS CDK Terraform state backend

This project provides a CDK construct bootstrapping an AWS account with a S3 Bucket and a DynamoDB table as [Terraform state backend](https://www.terraform.io/docs/language/settings/backends/s3.html).

Terraform doesn't come shipped with a cli command bootstrapping the account for [State Storage and Locking](https://www.terraform.io/docs/language/state/backends.html)
like [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/cli.html#cli-bootstrap) provides with `cdk bootstrap`.
While bootstrapping the AWS Organization and Accounts this construct may be used to create:

- S3 Bucket with blocked public access, versioned, encrypted by SSE-S3
- DynamoDB Table with pay per request, continuous backups using point-in-time recovery, encrypted by AWS owned key
- IAM Policy with read/write access to the created S3 Bucket and DynamoDB Table

See [API.md](https://github.com/pepperize/cdk-terraform-state-backend/blob/main/API.md)

## Install

### TypeScript

```shell
npm install @pepperize/cdk-terraform-state-backend
```

or

```shell
yarn add @pepperize/cdk-terraform-state-backend
```

### Python

```shell
pip install pepperize.cdk-terraform-state-backend
```

### C# / .Net

```
dotnet add package Pepperize.CDK.TerraformStateBackend
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-terraform-state-backend</artifactId>
  <version>${cdkTerraformStateBackend.version}</version>
</dependency>
```

## Example

```typescript
import { App, Stack } from "aws-cdk-lib";
import { TerraformStateBackend } from "@pepperize/cdk-terraform-state-backend";

const app = new App();
const stack = new Stack(app, "stack", {
  env: {
    account: "123456789012",
    region: "us-east-1",
  },
});

// When
new TerraformStateBackend(stack, "TerraformStateBackend", {
  bucketName: "terraform-state-backend",
  tableName: "terraform-state-backend",
});
```

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-backend-123456789012-us-east-1"
    dynamodb_table = "terraform-state-backend-123456789012"
    key = "path/to/my/key"
    region = "us-east-1"
  }
}
```

See [Terraform S3 Example Configuration](https://www.terraform.io/docs/language/settings/backends/s3.html#example-configuration)

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



