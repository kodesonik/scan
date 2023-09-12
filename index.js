var exec = require('child_process').execFile;
var path = 'c:\scan\Quickscan.exe resolution 300 A4 pdf showProgress prodname "My product" scanner "HP Scanjet 3200"';
var fun = function() {
   exec(path, function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();
