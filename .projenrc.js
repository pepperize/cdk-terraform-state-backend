const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");

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
  keywords: ["AWS", "CDK", "Terraform", "State", "Backend", "S3", "DynamoDB"],
  repositoryUrl: "https://github.com/pepperize/cdk-terraform-state-backend.git",
  testDeps: ["@aws-cdk/assertions"],
  devDeps: ["@pepperize/projen-awscdk-construct", "cdk-nag@^2.0.0"],

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
});

project.synth();
