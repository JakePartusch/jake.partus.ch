const execa = require("execa");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = {
  name: "netlify-plugin-lighthouse",
  onPostBuild: async () => {
    try {
      // const { stdout } = await execa("lhci", [
      //   "autorun",
      //   "--upload.target=temporary-public-storage"
      // ]);
      // console.log(stdout);
      const { stdout, stderr } = await exec(
        "npx @lhci/cli autorun --upload.target=temporary-public-storage"
      );
      console.log(stdout);
      console.log(stderr);
    } catch (e) {
      console.log(e);
    }
  }
};
