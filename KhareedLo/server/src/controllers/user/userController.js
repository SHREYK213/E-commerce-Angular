const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const otpMiddleware = require("../../middleware/verification/otp");
const {sendMail} = require("../../utils/email/email");
const { signToken } = require("../../middleware/authorization/auth");


const Users = db.users;

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return res.status(500).send('Internal Server Error');
  }
};

const register = async (req, res) => {
  try {
    const { name, email, phone_number, date_of_birth, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Name, email, and password are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const ogOtp = otpMiddleware.generateOTP();
    const otp = ogOtp;  // Store plain OTP
    const otpExpiration = otpMiddleware.setOTPExpiration();
    const data = {
      name,
      email,
      phone_number,
      date_of_birth,
      password_hash: hashedPassword,
      otp,
      otpExpiration,
    };

    const user = await Users.create(data);

    if (user) {
      sendMail(user.email, `Welcome to KhareedLo ${user.name}`, `Your OTP is: ${ogOtp}`);

      console.log("User", JSON.stringify(user, null, 2));

      return res.status(201).json({ message: "Registration Successful, Please check your email for verification.",user });
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).send("Invalid email or password");
    }

    if (!user.isVerified) {
      return res
        .status(401)
        .send(
          "Account not verified. Please check your email for verification instructions."
        );
    }

    // Generate a new access token using the signToken function
    const newToken = await signToken({ id: user.id });
    console.log("New Token:", newToken);

    return res.status(200).send({ user, token: newToken.accessToken });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};
module.exports = {
  getUsers,
  register,
  login,
};
