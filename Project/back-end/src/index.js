import app from "./app";
import express from "express";
import sqlite from "sqlite";
import path from "path";
import fs from "fs";
import SQL from "sql-template-strings";
import cors from "cors";
const multer = require("multer");

import {
  authenticate,
  generateJWT,
  returnJWT,
  refreshJWT,
  withAuth
} from "./auth";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (req.body.event == "Profile_Images") {
      cb(null, path.join(__dirname, "../Public/Profile_Images"));
    } else {
      cb(null, path.join(__dirname, "../Public/Posts_Images"));
    }
  },
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file;
    const date = Date.now();
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  }
});
const upload = multer({ storage: multerStorage });

app.post("/upload-resume", upload.single("resume"), (req, res, next) => {
  console.log(req.file);
});

const start = async () => {
  const db = await sqlite.open("./Plantium.sqlite");

  app.get("/", (req, res) => res.send("ok"));

  app.post("/Images", upload.array("photos", 10), (req, res, next) => {
    console.log(req.files);
  });

  app.post("/login", authenticate, generateJWT, refreshJWT, returnJWT);

  app.post("/check_token", withAuth, (req, res) => {
    res.json({
      success: true,
      results: {
        user: req.user
      }
    });
  });

  app.post("/signup", upload.single("Image"), async (req, res) => {
    console.log("try");
    try {
      // console.log(req.body);
      const { Username, Email, Password, event } = req.body;
      const Image = req.file && rupload.array("uploadedImages", 10);
      console.log(Username, Email, Password, event, Image);
      if (!Username || !Password || !Email || !Image) {
        throw new Error("you must provide your data");
      }
      const result = await db.run(
        `INSERT INTO Persons (Username, Password, Email, Image) Values ('${Username}', '${Password}', '${Email}','${Image}')`
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

  // app.post("/proceed", async (req, res) => {
  //   console.log("try");
  //   try {
  //     // console.log(req.body);
  //     const { First_Name, Last_Name, Bio, Other_Details } = req.body;

  //     if (!First_Name || !Bio || !Last_Name || !Other_Details) {
  //       throw new Error("you must provide your data");
  //     }
  //     const result = await db.run(
  //       `INSERT INTO Persons (First_Name, Bio, Last_Name,Other_Details) Values ('${First_Name}', '${Bio}', '${Last_Name}', '${Other_Details}')`
  //     );
  //     const r = result.stmt.lastID;
  //     res.status(200).json({
  //       success: true,
  //       id: r
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     res.status(500).json({
  //       success: false,
  //       message: e.message
  //     });
  //   }
  // });

  app.get("/Persons/read", async (req, res) => {
    const sql = "SELECT * FROM Persons";
    console.log(sql);

    try {
      const Persons = await db.all(sql);
      res.json({
        success: true,
        results: Persons
      });
    } catch (e) {
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

  app.put(
    "/Persons/update",
    upload.single("Image"),
    withAuth,
    async (req, res) => {
      const id = req.user.Persons_id;
      const sql = `UPDATE Persons SET Email=?, Name=?, Bio=?,Image=? WHERE Persons_id=${id}`;
      console.log(sql);
      const { Email } = req.body;
      const { Name } = req.body;
      const { Bio } = req.body;
      const Image = req.file && req.file.filename;
      try {
        const row = await db.run(sql, [Email, Name, Bio, Image]);
        res.json({
          success: true,
          results: {
            ...row
          }
        });
      } catch (e) {
        console.log(e);
        res.status("404").json({
          success: false,
          message: e.message
        });
      }
    }
  );

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
    const sql = "SELECT * FROM Posts ORDER BY Date ASC";
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
      const Posts = await db.all(sql);
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
        message: `No post available with ID: ${id}`
      });
    }
  });

  app.post("/Posts/add", upload.none(), async (req, res) => {
    try {
      const { Posts_id } = req.body;
      const { Type } = req.body;
      const { Title } = req.body;
      const { date } = req.body.date;
      const { Text } = req.body;
      const { Persons_Persons_id } = req.body;
      console.log(req.body);
      if (!Title || !Text) {
        throw new Error("you must provide your data");
      }
      const result = await db.run(
        `INSERT INTO Posts (Posts_id,Type, Title, date, Text, Persons_Persons_id) Values ('${Posts_id}','${Type}', '${Title}', ${date},'${Text}',${Persons_Persons_id})`
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

  app.put("/Posts/update/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE Posts SET Type=?,Title = ?,Date=?, Embedded_Link=?,Text=? WHERE Posts_id=${id}`;
    const { Type } = req.body;
    const { Title } = req.body;
    const { date } = req.body;
    const { Text } = req.body;

    try {
      const row = await db.run(sql, [
        Type,
        Title,
        Date.now(),
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

  app.get("/Posts_Images/read", async (req, res) => {
    const sql = "SELECT * FROM Posts_Images";
    console.log(sql);
    try {
      const Posts_Images = await db.all(sql);
      res.json({
        success: true,
        results: Posts_Images
      });
    } catch (e) {
      res.status("404").json({
        success: false,
        message: e.message
      });
    }
  });

  app.get("/Posts_Images/read/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM Posts_Images WHERE Posts_Images_id=${id}`;
    try {
      const Posts_Images = await db.all(sql);
      console.log("Posts ", Posts_Images);
      console.log("id ", id);
      res.json({
        success: true,
        results: Posts_Images
      });
    } catch (e) {
      console.log(e);
      res.status(404).json({
        success: false,
        message: `No Post Image available with ID: ${id}`
      });
    }
  });

  app.put("/Posts_Images/update/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE Posts_Images SET Image_names WHERE Posts_id=${id}`;
    const { Image_names } = req.body;

    try {
      const row = await db.run(sql, [Image_names]);
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

  app.delete("/Posts_Images/delete/:id", async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE Posts_Images WHERE Posts_Images_id=?`;
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

  app.post("/Posts_Images", upload.single("Image_names"), async (req, res) => {
    console.log("try");
    try {
      console.log(req.body);
      const Image_names = req.file && req.file.filename;
      console.log(Image_names);
      const result = await db.run(
        `INSERT INTO Posts_Images (Image_names) Values ('${Image_names}')`
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

  app.listen(3030, () => console.log("server listening on port 3030"));
};
start();
