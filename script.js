
//Menu Dropdown
function dropDown() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  

  document.getElementById("myBtn").click();
  
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
//Fim Dropdown



function getContact() {
  var cName = document.getElementById("contactname");
  var cEmail = document.getElementById("contactemail");
  var cSub = document.getElementById("contactsub");
  var cMes = document.getElementById("contactmes");

  //Como não tem BD integrado não tem diretório para salvar, mas a 'lógica' já está preparada.
}

function newItem() {
  var pName = document.getElementById("prodName");
  var pPreco = document.getElementById("prodPreco");
  var pEst = document.getElementById("prodEst");

  var pImg = document.getElementById("prodImgBtn");
}
