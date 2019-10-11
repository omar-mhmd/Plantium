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
  app.get("/", (req, res) => res.send("ok"));
  
   app.post("/login", authenticate, generateJWT, returnJWT);
   
   app.post("/check_token", withAuth, (req, res) => {
     res.json({
       success: true,
       results: {
         user: req.user
       }
     });
   });

  app.listen(3030, () => console.log("server listening on port 3030"));
};
start();
