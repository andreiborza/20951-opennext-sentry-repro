/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "opennext-sentry-repro",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: "7.20.0",
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {});
  },
});
