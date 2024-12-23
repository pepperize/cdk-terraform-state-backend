import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-terraform-state-backend",
  description:
    "This project provides a CDK construct bootstrapping an AWS account with a S3 Bucket and a DynamoDB table as terraform state backend.",
  keywords: ["aws", "cdk", "terraform", "state", "backend", "s3", "dynamodb"],
  repositoryUrl: "https://github.com/pepperize/cdk-terraform-state-backend.git",

  projenrcTs: true,

  peerDeps: ["@pepperize/cdk-private-bucket"],
  devDeps: ["@pepperize/projen-awscdk-construct@~0.0.730", "cdk-nag@^2.0.0"],

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
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-terraform-state-backend",
    javaPackage: "com.pepperize.cdk.terraform_state_backend",
  },
});

project.synth();
