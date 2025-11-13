// index.js
import express from "express";
import fs from "fs";

const app = express();

// ❌ XSS: hiển thị dữ liệu không được sanitize
app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`); // <- nguy cơ XSS
});

// ❌ Command Injection
app.get("/exec", (req, res) => {
  const cmd = req.query.cmd;
  require("child_process").exec(cmd, (err, stdout) => {
    if (err) return res.send("Error");
    res.send(stdout);
  });
});

// ❌ Insecure file access
app.get("/read", (req, res) => {
  const file = req.query.file;
  const content = fs.readFileSync(file, "utf8");
  res.send(content);
});

app.listen(3000, () => console.log("Server running"));
