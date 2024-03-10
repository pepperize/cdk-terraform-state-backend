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
