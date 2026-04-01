function login(){
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if(user=="" || pass==""){
    alert("Isi semua!");
  } else {
    window.location.href = "home.html"; 
  }
}