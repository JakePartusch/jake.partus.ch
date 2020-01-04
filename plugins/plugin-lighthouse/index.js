const execa = require("execa");

module.exports = {
  name: "netlify-plugin-lighthouse",
  onPostBuild: async () => {
    const { stdout } = await execa("lhci", [
      "autorun",
      "--upload.target=temporary-public-storage"
    ]);
    console.log(stdout);
  }
};
