const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const zod = require("zod");
const authSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(4),
});

function validateInput(userInput) {
  return authSchema.safeParse(userInput);
}

const localDB = [];
const jwtSecret = "kwert4523";

app.post("/signup", function (req, res) {
  const validatedUser = validateInput(req.body);
  if (validatedUser.success) {
    let user = {
      userId: localDB.length + 1,
      ...validatedUser.data,
    };
    localDB.push(user);
  }
  const token = jwt.sign({ username: validatedUser.data.username }, jwtSecret, {
    expiresIn: "1h",
  });
  res.json({ msg: "sign success", token, localDB });
});

app.get("/users", function (req, res) {
  let auth = req.headers.authorization;

  auth = auth.split(" ");
  const token = auth[1];
  let tokenVerification;
  try {
    tokenVerification = jwt.verify(token, jwtSecret);
    let response = localDB.filter(
      (user) => user.username !== tokenVerification.username
    );
    res.json({ users: response });
  } catch (error) {
    console.log(error);
    res.json({ err: error });
  }
});

app.use(function (err, req, res, next) {
  res.json({
    msg: "sorry something went wrong with the server!",
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`server is running...on ${PORT}`));

// ----------------- zod validation tutorial ------------------------------------

// const zod = require("zod");

// function validateInput(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(4),
//   });
//   const response = schema.safeParse(obj);
//   return response;
// }

// let r = validateInput({ email: "omshankar@zy.com", password: "34ds" });
// console.log(r);
