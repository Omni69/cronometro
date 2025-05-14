let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let rodando = false; // ✅ Variável para verificar se já está rodando

function atualizarDisplay() {
    let formato = 
        (horas < 10 ? "0" + horas : horas) + ":" + 
        (minutos < 10 ? "0" + minutos : minutos) + ":" + 
        (segundos < 10 ? "0" + segundos : segundos);
    
    document.getElementById("display").innerText = formato;
}

function iniciar() {
    if (!rodando) { // ✅ Só inicia se não estiver rodando
        rodando = true;
        intervalo = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
            atualizarDisplay();
        }, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);
    rodando = false; // ✅ Marca como pausado
}

function resetar() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    rodando = false; // ✅ Reseta também a variável de controle
    atualizarDisplay();
}

// Eventos dos botões
document.getElementById("start").addEventListener("click", iniciar);
document.getElementById("pause").addEventListener("click", pausar);
document.getElementById("reset").addEventListener("click", resetar);
