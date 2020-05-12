/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */

const path = require("path");

const simpleGit = require(path.join(
  __dirname,
  "../node_modules/",
  "simple-git"
));
const deasync = require(path.join(__dirname, "../node_modules/", "deasync"));

// eslint-disable-next-line no-unused-vars
const process = async (obj, globalData) => {
  const _obj = obj["kalpa-simple-git"];
  console.log("inside kalpa-simple-git");
  if (Object.prototype.hasOwnProperty.call(_obj, "ask")) {
    deasync.sleep(25);
  }
  // To supress error */
  simpleGit();
  deasync.sleep(25);
};

exports.process = process;
