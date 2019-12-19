var attempt = 3; // Pour compter le nombre de tentatives//
//Execussion aprés avoir cliqué sur le bouton//
function validate(){
var name = document.getElementById("name").value;
var password = document.getElementById("password").value;
var repassword = document.getElementById("repassword").value;
var username = document.getElementById("username").value;
var firstname = document.getElementById("firstname").value;
var birthday = document.getElementById("birth-day").value;
var mail = document.getElementById("mail").value;
var submit = document.getElementById("submit").value;
if ( name == "Jean-Daniel" && password == "JD13"){
alert ("Login successfully");
window.location = "page.html"; // Rediriger vers cette page//
return false;
}
else{
attempt --;// Decrementation//
alert("You have left "+attempt+" attempt;");
// Bloque le formulaire aprés 3 essayes//
if( attempt == 0){
document.getElementById("name").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("repassword").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById("username").disabled = true;
document.getElementById("firstname").disabled = true;
document.getElementById("birth-day").disabled = true;
document.getElementById("mail").disabled = true;
return false;
}
}
}
