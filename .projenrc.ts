import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-terraform-state-backend",
  description:
    "This project provides a CDK construct bootstrapping an AWS account with a S3 Bucket and a DynamoDB table as terraform state backend.",
  keywords: ["aws", "cdk", "terraform", "state", "backend", "s3", "dynamodb"],
  repositoryUrl: "https://github.com/pepperize/cdk-terraform-state-backend.git",

  projenrcTs: true,
  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  peerDeps: ["@pepperize/cdk-private-bucket"],
  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.1", "@types/node@^22", "typescript@~6.0", "cdk-nag@^2"],

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.TerraformStateBackend",
  },
  publishToPypi: {
    distName: "pepperize.cdk-terraform-state-backend",
    module: "pepperize_cdk_terraform_state_backend",
  },
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-terraform-state-backend",
    javaPackage: "com.pepperize.cdk.terraform_state_backend",
  },
});

project.synth();
