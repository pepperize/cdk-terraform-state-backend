const { AwsCdkConstructLibrary, JsonFile } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "1.134.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-terraform-state-backend",
  description:
    "This project provides a CDK construct bootstrapping an AWS account with a S3 Bucket and a DynamoDB table as terraform state backend.",
  repositoryUrl: "https://github.com/patrick.florek/papperize/cdk-terraform-state-backend.git",

  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-dynamodb",
    "@aws-cdk/aws-iam",
    "@aws-cdk/aws-s3",
  ] /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */,
  cdkTestDependencies: ["@aws-cdk/assertions"] /* AWS CDK modules required for testing. */,
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ["cdk-nag"] /* Build dependencies for this module. */,
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */

  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },

  releaseToNpm: true,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.TerraformStateBackend",
  },
  publishToPypi: {
    distName: "pepperize.cdk-terraform-state-backend",
    module: "pepperize_cdk_terraform_state_backend",
  },

  eslint: true,
  eslintOptions: {
    prettier: true,
  },

  gitignore: [".idea"],
});

project.setScript("format", "prettier --write 'src/**/*.ts' test/**/*.ts '.projenrc.js' 'README.md'");

new JsonFile(project, ".prettierrc", {
  obj: {
    printWidth: 120,
  },
  marker: false,
});

project.synth();
