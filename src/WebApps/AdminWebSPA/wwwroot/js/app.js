//$ = require('jquery');
var getText = require('./lib');

//import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import Es6Lib from './es6codelib';

document.getElementById("fillthis").innerHTML = getText();

//$('#fillthiswithjquery').html('Filled by Jquery!');

let myObj = new Es6Lib();
$('#fillthiswithes6lib').html(myObj.getData());