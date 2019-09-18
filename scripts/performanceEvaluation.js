#!/usr/bin/env node
const exec = require("child_process").exec;

const main = async () => {
  console.log("netlify deploy --json");
  const deployPromise = new Promise((resolve, reject) => {
    exec(`netlify deploy --json`, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
  const deploySettings = JSON.parse(await deployPromise);
  const { deploy_url } = deploySettings;

  console.log("Deploy URL:", deploy_url);

  console.log(`npx @laas/lighthouse-ci ${deploy_url} --threshold=90`);

  const performancePromise = new Promise((resolve, reject) => {
    exec(
      `npx @laas/lighthouse-ci ${deploy_url} --threshold=90`,
      (error, stdout, stderr) => {
        if (error) {
          console.warn(error);
        }
        resolve(stdout ? stdout : stderr);
      }
    );
  });
  console.log(await performancePromise);
};

main();
