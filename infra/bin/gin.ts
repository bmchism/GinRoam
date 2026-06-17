#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { loadConfig } from "../lib/config";
import { GinStack } from "../lib/gin-stack";
import { SecurityStack } from "../lib/security-stack";

const app = new cdk.App();
const config = loadConfig(app);
const env = { account: config.account, region: config.region };

new GinStack(app, "GinStack", { env, config, description: "Gin Roam app — core" });

if (config.enableSecurityBaseline) {
  new SecurityStack(app, "GinSecurityStack", { env, config, description: "Gin Roam — security" });
}

app.synth();
