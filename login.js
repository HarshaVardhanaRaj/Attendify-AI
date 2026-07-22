function login(){


let role =
document.getElementById("role").value;



localStorage.setItem(
"userRole",
role
);



if(role=="Student")
{

window.location="profile.html";

}

else
{

window.location="index.html";

}


}