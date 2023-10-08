let cbrojo = document.querySelector("#rojo");
let valor1 = document.getElementById("input1");
let valor2 = document.getElementById("input2");
let valor3 = document.getElementById("input3");
const sumarBoton = document.getElementById("sumarBoton")
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const validarBoton = document.getElementById("validarBoton");
const resultadopr = document.getElementById("resultadopr");

cbrojo.addEventListener("click", conysinborde);

function conysinborde() {
    if (cbrojo.classList.contains("border-danger")) {
        cbrojo.classList.remove("border-danger");
        cbrojo.classList.add("border-secundary");
    } else {
        cbrojo.classList.remove("border-secundary");
        cbrojo.classList.add("border-danger");
    }
}

sumarBoton.addEventListener("click", function () {

    const numero1 = parseFloat(input1.value) || 0;
    const numero2 = parseFloat(input2.value) || 0;
    const numero3 = parseFloat(input3.value) || 0;
    const suma = numero1 + numero2 + numero3;

    if (suma <= 10) {
        alert("Perfecto! llevas " + suma + " Stickers!");
    }
    else if (suma >= 10) {
        alert("Lo Siento! Solo puedes llevar hasta 10 Stickers")
    }
});

validarBoton.addEventListener("click", function () {
    const valorSelect1 = select1.value;
    const valorSelect2 = select2.value;
    const valorSelect3 = select3.value;

    if (valorSelect1 === "9" && valorSelect2 === "1" && valorSelect3 === "1") {
        resultadopr.textContent = "Password 1 correcto";
    } else if (valorSelect1 === "7" && valorSelect2 === "1" && valorSelect3 === "4") {
        resultadopr.textContent = "Password 2 correcto";
    } else {
        resultadopr.textContent = "Password incorrecto";
    }
});
