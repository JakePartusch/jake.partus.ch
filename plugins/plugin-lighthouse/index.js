const execa = require("execa");
const exec = require("child_process").exec;

const promisifyExec = cmd => {
  console.log(cmd);
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

module.exports = {
  name: "netlify-plugin-lighthouse",
  onPostBuild: async () => {
    try {
      // const { stdout } = await execa("lhci", [
      //   "autorun",
      //   "--upload.target=temporary-public-storage"
      // ]);
      // console.log(stdout);
      const result = await promisifyExec(
        "lhci autorun --upload.target=temporary-public-storage"
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};
