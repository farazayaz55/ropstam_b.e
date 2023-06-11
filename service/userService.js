const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const findUser = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};



const generateNewPassword = () => {
  return "UE" + Math.floor(Math.random() * (10000 - 99999 + 1)) + 10000;
};
const hashPassword = async (passowrd) => {
  return await bcrypt.hash(passowrd, 10);
};

const comparePassword = async (givenPassword, actualPassword) => {
  return await bcrypt.compare(givenPassword, actualPassword);
};

const createAccessToken = async (id) => {
  return jwt.sign({id}, "y!jZRXJEgEGXaC(ErjZmMp4+AjbG2S&k9@ytSZBt", {
    expiresIn: "1d",
  });
};

const createRefreshToken = async (id) => {
  return jwt.sign({id}, "n@7tD2^vY4M*q%Lc+Gy)WsRfXzB9d#U6!eJ", {
    expiresIn: "7d",
  });
};

module.exports = {
  findUser,
  generateNewPassword,
  hashPassword,
  comparePassword,
  createAccessToken,
  createRefreshToken,
};
