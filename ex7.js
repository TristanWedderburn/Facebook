var database = [
{
	username: "tristan",
	password: "arsenal98",
},
{
	username: "jordan",
	password: "naruto1",
},
{
	username: "daniel",
	password: "art92",
},
{
	username: "mark",
	password: "ttc6",
},
{
	username: "maxine",
	password: "gbc70",
}
]; 

var newsFeed=[
{
	username:"Bobby",
	timeline:"Loving learning javascript"
},
{
	username:"Sally",
	timeline:"I'm ready to learn more!"
},
{
	username:"Mike",
	timeline:"Lets learn React soon!"
}]; 


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username,password){
	for(var i=0; i<database.length;i++){
		if(username==database[0].username 
		&&password==database[0].password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	if(isUserValid(username, password)==true){
			console.log(newsFeed);
	}else{
		alert("Sorry, the username and password entered are incorrect.");
	}
}

signIn(userNamePrompt,passwordPrompt);
