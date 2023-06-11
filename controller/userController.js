const Users = require("../model/userModel"); //we need user model
const userService = require("../service/userService");
const emailServie = require("../service/emailService");
const userModel = require("../model/userModel");

const userController = {
  signIn: async (req, res) => {
    try{
    const { email, password } = req.body;
    const user = await userService.findUser(email);
    if (!user) {
      return res.status(500).send("User Does not exist");
    }
    const isPasswordMatch = await userService.comparePassword(
      password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(500).send("Wrong password Entered");
    }
    const accessToken = await userService.createAccessToken(user._id);
    const refreshToken = await userService.createRefreshToken(user._id);

    user.password = "";

    return res
      .status(200)
      .cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      })
      .json({ accessToken, user });
    }
    catch(error){
      return res.status(500).json(error)
    }
  },
  signUp: async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await userService.findUser(email);
      if (user) {
        return res.status(500).send("User Already Exists");
      }
      const newPassword = userService.generateNewPassword().toString();

      const passHash = (await userService.hashPassword(newPassword)).toString();
      const body = { name, email, password: passHash };

      await userModel.create(body);
      await emailServie.sendSignUpMail(email, newPassword);
      return res.status(200).json({msg:"Email Sent"});
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  refreshToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(
        rf_token,
        "n@7tD2^vY4M*q%Lc+Gy)WsRfXzB9d#U6!eJ",
        (err, user) => {
          if (err)
            return res.status(400).json({ msg: "Please Login or Register" });

          const accesstoken = userService.createAccessToken({ id: user.id });

          res.json({ accesstoken });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController;
