/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */

const path = require("path");

const simple-git = require(path.join(__dirname, "../node_modules/", "simple-git"));
const deasync = require(path.join(__dirname, "../node_modules/", "deasync"));


// eslint-disable-next-line no-unused-vars
const process = async (obj, globalData) => {
  const _obj = obj["simple-git"];
  let answer = {};

  if (Object.prototype.hasOwnProperty.call(_obj, "ask")) {
    ;
  }

};

exports.process = process;
