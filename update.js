// ------------------------------  OPEN-AUTOMATION ----------------------------------- //
// -----------------  https://github.com/physiii/open-automation  -------------------- //
// ---------------------------------- update.js ------------------------------------ //

//module.exports = {
// pull: pull
//};


var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var fs = require('fs');
var console = require('console');

function pull() {
  console.log("switch to settings screen!");
  exec('cd ~/code/open-dash;git pull', function(err, stdout, stderr) {
    if (err) {
      console.log(err)
      return;
    }

    console.log(stdout);

  });

};


module.exports = {
  pull: pull,
  
};

