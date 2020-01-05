const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = {
  name: "netlify-plugin-lighthouse",
  onEnd: async () => {
    console.log(process.env);
    try {
      // const { stdout } = await execa("lhci", [
      //   "autorun",
      //   "--upload.target=temporary-public-storage"
      // ]);
      // const { stdout, stderr } = await exec(
      //   `npx @lhci/cli autorun --upload.target=temporary-public-storage`
      // );
      const { stdout, stderr } = await exec(
        `npx @laas/lighthouse-ci ${process.env.DEPLOY_URL}`
      );
      console.log(stdout);
      console.log(stderr);
    } catch (e) {
      console.log(e);
    }
  }
};
