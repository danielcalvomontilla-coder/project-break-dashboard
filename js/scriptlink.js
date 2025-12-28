console.log("funcionalink");
console.log(localStorage);

const btnsubmit = document.getElementById("btnsubmit");

const link = document.getElementById("link");
const showName = document.getElementById("showName");
const showLink = document.getElementById("showLink");


btnsubmit.addEventListener("click", function (){
    console.log("boton funciona");
    const name = document.getElementById("inputName").value;
    localStorage.setItem("name", name)

})


