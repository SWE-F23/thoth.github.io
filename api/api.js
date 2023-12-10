const express = require('express');
const cors = require('cors');
const fs = require('fs');
const srv = express();
const port = 8000;

// create a comparison function

srv.use(express.json());
srv.use(express.urlencoded({ extended: true }));
srv.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

srv.get('/compare', (req, res) => {
  const { a, b } = req.query;
  console.log(a === b);
  res.send(a === b);
})

// start the server
// listen to port 3001
srv.listen(port, () => {
  console.log("Server listening at http://localhost:${port}");
})

var exec = require('child_process').exec;
var child;

srv.get('/compile', (req, res) => {
  const { code } = req.query;
  console.log("Compiling...");
  fs.writeFile('/tmp/file.cc', code, function(err) {
    if (err) {
      console.log("Error while writing your file");
    }
  })

  const cmd = 'g++ /tmp/file.cc -o /tmp/a.out';
  child = exec(cmd,
    function(error, stdout, stderr) {
      if (error !== null) {
        console.log("Error while compiling your file");
        res.send(stderr);
      } else {
        console.log(stdout);
        res.send("Compiled successfully");
      }
    });
})

srv.get('/run', (req, res) => {
  const cmd = '/tmp/a.out';
  child = exec(cmd,
    function(error, stdout, stderr) {
      if (error !== null) {
        console.log(stderr);
      } else {
        console.log(stdout);
      }
      res.send(stdout);
    });
})

// New endpoint to delete a.out file
srv.get('/deleteAOut', (req, res) => {
  deleteAOutFile();
  res.send('a.out deleted successfully');
});

// Function to delete a.out file
function deleteAOutFile() {
  fs.unlink('/tmp/a.out', (err) => {
    if (err) {
      console.error('Error deleting a.out file', err);
    } else {
      console.log('a.out file deleted successfully');
    }
  });
}
