import jwt from "jsonwebtoken";
import sqlite from "sqlite";

const jwtSecret = "somestring";

export const authenticate = async (req, res, next) => {
  const db = await sqlite.open("./Plantium.sqlite");
  const query = "SELECT * FROM Persons WHERE Username = ? AND Password = ?";
  const { Username, Password } = req.body;
  console.log("body", req.body);
  try {
    const user = await db.get(query, [Username, Password]);
    if (user) {
      //console.log("user", user);
      req.user = user;
      console.log("user in authenticate", user);
      next();
    } else {
      res
        .status(401)
        .json({ success: false, message: "Wrong username or password" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const generateJWT = async (req, res, next) => {
  if (req.user) {
    const db = await sqlite.open("./Plantium.sqlite");
    const query = "SELECT * FROM Persons WHERE Persons_id=?";
    try {
      const jwtPayload = { id: req.user.Persons_id };
      const jwtData = { expiresIn: "2 days" };
      req.token = jwt.sign(jwtPayload, jwtSecret, jwtData);
      console.log("id", req.user.Persons_id, req.token);
      // Sets a new refresh_token every time the jwt is generated
      const user = await db.get(query, [req.user.Persons_id]);
      console.log("user in generateJWT", user);
      if (user) {
        const update_query =
          "UPDATE Persons SET Tokens = ? WHERE Persons_id = ?";
        // console.log("weird",update_query);
        await db.run(update_query, [req.token, req.user.Persons_id]);
        next();
      } else {
        res.status(500).json({ error: "Please contact administrator" });
      }
    } catch (e) {
      console.log("here");
      res.status(500).json({ error: e.message });
    }
  }
  next();
};

export const refreshJWT = async (req, res, next) => {
  const db = await sqlite.open("./Plantium.sqlite");
  const query = "SELECT * FROM Persons WHERE Username = ? AND Tokens = ?";
  const { Username, Tokens } = req.body;
  try {
    req.user = await db.get(query, [Username, Tokens]);
  } catch (e) {
    res.status(401).json({ error: "Invalid Username or Tokens" });
  }
};

export const returnJWT = (req, res) => {
  if (req.user && req.token) {
    console.log("returning");
    res.status(200).json({
      success: true,
      results: {
        token: req.token,
        Tokens: req.user.Tokens,
        user: req.user
      }
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export const withAuth = async (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;
  const db = await sqlite.open("./Plantium.sqlite");

  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, jwtSecret, function(err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        const query = "SELECT * FROM Persons WHERE Persons_id=?";
        req.user = db.get(query, [decoded.id]);
        next();
      }
    });
  }
};
