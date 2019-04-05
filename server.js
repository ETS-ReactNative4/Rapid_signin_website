const express = require('express');
const path = require('path');
const database = require('better-sqlite3');
const app = express();
const http_port = 3000;

window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port

const homePageTimeout = "<script>setTimeout(\"window.location.href = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port,2000'\")</script>"

app.use(express.static(path.join(__dirname, 'build')));
/*
 *  PING
 */
app.get('/ping', (req, res) => {
    console.log("RETURNED pong");
    return res.send('pong');
});
/*
 * Index.html request
 */
app.get('/', (req, res) => {
    console.log("GET REQUEST Recieved at /")
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
/*
 * Sign-In request
 */
app.get('/signin', (req, res) => {
  console.log("GET REQUEST Recieved at /signin");
  const ssid = req.query.ssid;
  const simple = req.query.simple;
  if(ssid == undefined){
    //ERROR
    res.send("ERROR");
  }
  else{
    const db = new database('signin_info.db');
    var stmt = db.prepare('SELECT EXISTS(SELECT 1 FROM student_info WHERE ssid=?);');
    stmt.pluck(true);
    if(stmt.get(ssid)){
      console.log("STUDENT EXISTS")
      stmt = db.prepare('INSERT INTO signin_info(ssid, time_in, time_out) VALUES(?,?,?)');
      const info = stmt.run(ssid, Date.now(), 0);
      console.log("STUDENT INSERTED");
      console.log(info);
      if(simple == undefined){
        //res.sendFile(path.join(__dirname, 'build', 'index.html'));
      }
      else{
        res.send(homePageTimeout + "Success")
      }
    }
    else {
      res.send(homePageTimeout + "STUDENT DOES NOT EXIST");
    }
  }

});
/*
 * New Student Request
 */
app.get('/new_student', (req, res) => {
  const ssid = req.query.ssid;
  const first_name = req.query.first;
  const last_name = req.query.last;
  const email = req.query.email;
  if(ssid == undefined ||
    first_name == undefined ||
    last_name == undefined ||
    email == undefined){
    res.send(homePageTimeout + "FAILED TO INSERT ROW INTO DATABASE");
  }
  else{
    const db = new database('signin_info.db');
    const stmt = db.prepare('INSERT INTO student_info(ssid, first_name, last_name, email) VALUES (?,?,?,?)');
    const info = stmt.run(ssid, first_name, last_name, email);
    console.log(info);
    res.send(homePageTimeout + "INSERTED ROW INTO DATABASE");
  }
});

app.listen(process.env.PORT || http_port, () => console.log("Listening on port 3000"));
