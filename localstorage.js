function submit()
{
   let first_name=document.getElementById("first_name").value;
   let emailid=document.getElementById("email").value;
   let phone_number=document.getElementById("phone").value;
   let password=document.getElementById("password").value;

   let first_name1=localStorage.setItem("first name",first_name);
   let email=localStorage.setItem("email Id",emailid);
   let password1=localStorage.setItem("Password",password);
}
