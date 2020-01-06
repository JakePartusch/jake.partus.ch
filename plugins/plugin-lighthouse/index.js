module.exports = {
  name: "netlify-plugin-lighthouse",
  onEnd: () => {
    require("child_process").spawnSync(
      "npx",
      ["@lhci/cli", "autorun", "--upload.target=temporary-public-storage"],
      {
        cwd: process.cwd(),
        stdio: "inherit"
      }
    );
  }
};
