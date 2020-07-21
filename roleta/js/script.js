function rodarRoleta() {
    varGlobal = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("roleta"),
        btnStop: document.getElementById("btnStop")
    }

    varGlobal.timeInitial = new Date();
    varGlobal.btnPlay.style.visibility = "hidden";
    varGlobal.btnStop.style.visibility = "visible";
    varGlobal.roleta.style.animation = "roleta 2s linear infinite";

}

function calculate() {
    var timeFinal = new Date();
    var tempo = Math.abs(timeFinal - varGlobal.timeInitial);
    var box = parseInt(tempo / 250);
    if (box > 7)
        box = parseInt(box % 8);
    return box;
}


function pararRoleta() {
    varGlobal.roleta.style["animation-play-state"] = "paused";
    varGlobal.btnStop.style.visibility = "hidden";

    var box = calculate();
    var boxGanhador = document.getElementById("opt".concat(box))

    if (boxGanhador.innerHTML == "Tente outra vez") {
        Swal.fire({
            icon: 'error',
            title: 'Você não ganhou!',
            text: 'Infelizmente você não ganhou nenhum desconto, tente novamente',
        });
    } else {
        Swal.fire({
            title: "Parabéns você ganhou " + boxGanhador.innerHTML,
            width: 600,
            padding: '3em',
            background: '#fff url(background.png) ',
        });
    }

}