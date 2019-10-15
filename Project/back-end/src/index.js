import app from "./app";
import express from "express";
import sqlite from "sqlite";
import path from "path";
import fs from "fs";
import SQL from "sql-template-strings";
import {
  authenticate,
  generateJWT,
  returnJWT,
  refreshJWT,
  withAuth
} from "./auth";

const start = async () => {
  const db = await sqlite.open("./Plantium.sqlite");

  app.get("/", (req, res) => res.send("ok"));

  app.post("/login", authenticate, generateJWT, refreshJWT, returnJWT);

  app.post("/check_token", withAuth, (req, res) => {
    res.json({
      success: true,
      results: {
        user: req.user
      }
    });
  });

  app.post("/signup", async (req, res) => {
    console.log("try");
    try {
      // console.log(req.body);
      const { Username, Email, Password } = req.body;
      
      if (!Username || !Password || !Email) {
        throw new Error("you must provide your data");
      }
      const result = await db.run(
        `INSERT INTO Persons (Username, Password, Email) Values ('${Username}', '${Password}', '${Email}')`
      );
      const r = result.stmt.lastID;
      res.status(200).json({
        success: true,
        id: r
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: e.message
      });
    }
  });
  // const postSignupUser = async (props) => {
  //       const { Username, Password, name, familyname, email, type } = props;
  //       console.log("createUser", props)lets meet in 10 min (at 12) to evaluate your client project and update your competencies/skills
  //       if (!Username  !Password  !props  !name  !familyname || !email) {
  //           throw new Error("you must provide your data");
  //       }
  //       try {
  //           const login_user = await db.run(
  //               SQLINSERT INTO Login (Username, Password, type) Values (${Username}, ${Password}, 'user')
  //           );
  //           console.log(login_user)
  //           const login_id = login_user.stmt.lastID;
  //           const user_profile = await db.run(SQLINSERT INTO User (name, familyname, email, login_id) Values (${name}, ${familyname}, ${email}, ${login_id}));
  //           return {
  //               login_user,
  //               user_profile
  //           }
  //           // return id;
  //       } catch (err) {
  //           console.log(err)
  //           throw new Error("cannot insert this combination");
  //       }
  //   };

  app.listen(3030, () => console.log("server listening on port 3030"));
};
start();
