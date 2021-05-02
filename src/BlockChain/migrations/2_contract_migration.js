const SimpleStorage = artifacts.require("MedicalHistory");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
  };
  