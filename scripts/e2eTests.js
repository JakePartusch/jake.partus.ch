#!/usr/bin/env node
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const main = async () => {
  const { stdout, stderr } = await exec(`netlify deploy --json`);
  const deploySettings = JSON.parse(stdout);
  const { deploy_url } = deploySettings;

  console.log("Deploy URL:", deploy_url);

  require("child_process").spawnSync(
    "cypress",
    ["run", "--config", `baseUrl=${deploy_url}`],
    {
      cwd: process.cwd(),
      stdio: "inherit"
    }
  );
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
