import app from "./app";
import express from "express";
import sqlite from "sqlite";
import path from "path";
import fs from "fs";
import SQL from "sql-template-strings";
import multer from "multer";
import {
  authenticate,
  generateJWT,
  returnJWT,
  refreshJWT,
  withAuth
} from "./auth";



var storage = multer.diskStorage({
  destination: path.join(__dirname, "/../Public/Profile_Images")
});

const upload = multer({
  storage: storage
});

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

    app.post("/proceed", async (req, res) => {
      console.log("try");
      try {
        // console.log(req.body);
        const { First_Name, Last_Name, Bio,Other_Details } = req.body;

        if (!First_Name || !Bio || !Last_Name || !Other_Details) {
          throw new Error("you must provide your data");
        }
        const result = await db.run(
          `INSERT INTO Persons (First_Name, Bio, Last_Name,Other_Details) Values ('${First_Name}', '${Bio}', '${Last_Name}', '${Other_Details}')`
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

  app.get("/Persons/read", async (req, res) => {
    const sql = "SELECT * FROM Persons";
    console.log(sql);
     
    try {
      const Persons = await db.all(sql);
      res.json({
        success: true,
        results: Persons
      
      });
    } 
      
    catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.get("/Persons/read/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM Persons WHERE Persons_id=${id}`;
    try {
      const Persons = await db.get(sql);
      console.log("Persons ", Persons);
      console.log("id ", id);
      res.json({
        success: true,
        results: Persons
      });
    } catch (e) {
      console.log(e);
      res.status(404).json({
        success: false,
        message: `No person available with ID: ${id}`
      });
    }
  });

  app.put("/Persons/update/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE Persons SET Username=?,Password = ?,Email=? WHERE Persons_id=${id}`;
    const { Username } = req.body;
    const { Password } = req.body;
    const { Email } = req.body;

    try {
      const row = await db.run(sql, [Username, Password, Email]);
      res.json({
        success: true,
        results: {
          ...row
        }
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });



  app.delete("/Persons/delete/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE Persons WHERE Persons_id=?`;
    try {
      const row = await db.run(sql, [id]);
      res.json({
        success: true,
        results: {
          ...row
        }
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.get("/Posts/read", async (req, res) => {
    const sql = "SELECT * FROM Posts";
    console.log(sql);
    try {
      const Posts = await db.all(sql);
      res.json({
        success: true,
        results: Posts
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.get("/Posts/read/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM Posts WHERE Posts_id=${id}`;
    try {
      const Posts = await db.get(sql);
      console.log("Posts ", Posts);
      console.log("id ", id);
      res.json({
        success: true,
        results: Posts
      });
    } catch (e) {
      console.log(e);
      res.status(404).json({
        success: false,
        message: `No person available with ID: ${id}`
      });
    }
  });

  app.put("/Posts/update/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE Posts SET Type=?,Title = ?,Date=?, Embedded_Link=?,Text=? WHERE Posts_id=${id}`;
    const { Type } = req.body;
    const { Title } = req.body;
    const { Date } = req.body;
    const { Embedded_Link } = req.body;
    const { Text } = req.body;

    try {
      const row = await db.run(sql, [
        Type,
        Title,
        Date.now(),
        Embedded_Link,
        Text
      ]);
      res.json({
        success: true,
        results: {
          ...row
        }
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.delete("/Posts/delete/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE Posts WHERE Posts_id=?`;
    try {
      const row = await db.run(sql, [id]);
      res.json({
        success: true,
        results: {
          ...row
        }
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.listen(3030, () => console.log("server listening on port 3030"));
};
start();
