var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer')
var msg= '<p> Copyright &copy' + year + ' <a href="#">Redeemer University.</a> All Rights Reserved.</p>';
el.innerHTML = msg;

var user = {
    matricNo: "RUN/AAA/12/1234",
    password: 12345
}

function check() {
  var inputMatric = document.getElementById('matric').value;
  var inputPass = document.getElementById('pass').value;
  var msg1 = "Signed In successful";
  var msg2 = "Incorrect Details";
  if(inputMatric === user.matricNo&&Number(inputPass) === user.password) {
    var show = document.getElementById('show').innerHTML = msg1;
  }
  else {
    var show = document.getElementById('show').innerHTML = msg2;
  }
}