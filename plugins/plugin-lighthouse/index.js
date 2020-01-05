const execa = require("execa");

module.exports = {
  name: "netlify-plugin-lighthouse",
  onPostBuild: async () => {
    try {
      const { stdout } = await execa("lhci", [
        "autorun",
        "--upload.target=temporary-public-storage"
      ]);
      console.log(stdout);
    } catch (e) {
      console.log(e);
    }
  }
};
