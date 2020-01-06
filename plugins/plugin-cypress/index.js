module.exports = {
  name: "netlify-plugin-cypress",
  onEnd: async () => {
    try {
      require("child_process").spawnSync(
        "cypress",
        ["run", "--config", `baseUrl=${process.env.DEPLOY_URL}`],
        {
          cwd: process.cwd(),
          stdio: "inherit"
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
};
