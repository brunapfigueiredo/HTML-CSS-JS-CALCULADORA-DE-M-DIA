function calcularMedia() {
    var quantidadeNotas = parseInt(document.getElementById("quantidadeNotas").value);

    if (isNaN(quantidadeNotas) || quantidadeNotas <= 0) {
        alert("Por favor, insira um número válido de notas.");
        return;
    }

    var notasContainer = document.getElementById("notasContainer");
    notasContainer.innerHTML = "";

    var labelQuantidadeNotas = document.querySelector("label[for='quantidadeNotas']");
    var inputQuantidadeNotas = document.getElementById("quantidadeNotas");

    labelQuantidadeNotas.style.display = "none";
    inputQuantidadeNotas.style.display = "none";

    var notasInseridas = [];

    for (var i = 1; i <= quantidadeNotas; i++) {
        var notaInput = document.createElement("input");
        notaInput.type = "number";
        notaInput.placeholder = "Nota " + i;
        notaInput.id = "nota" + i;
        notaInput.classList.add("nota-input");

        notasContainer.appendChild(notaInput);
        notasInseridas.push(notaInput);
    }

    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Média";
    calcularButton.classList.add("calcular-button");
    calcularButton.addEventListener("click", function () {
        var somaNotas = 0;

        for (var i = 0; i < quantidadeNotas; i++) {
            var nota = parseFloat(notasInseridas[i].value);

            if (isNaN(nota)) {
                alert("Por favor, insira uma nota válida.");
                return;
            }

            somaNotas += nota;
        }

        var media = somaNotas / quantidadeNotas;

        var resultadoContainer = document.createElement("div");
        resultadoContainer.classList.add("resultado-container");

        var mediaElement = document.createElement("div");
        mediaElement.textContent = "A média das notas inseridas é: " + media.toFixed(2);
        mediaElement.classList.add("media-result");

        resultadoContainer.appendChild(mediaElement);
        notasContainer.appendChild(resultadoContainer);

        labelQuantidadeNotas.style.display = "none";
        inputQuantidadeNotas.style.display = "none";

        calcularButton.style.display = "none";

        var retornarAoInicioButton = document.createElement("button");
        retornarAoInicioButton.textContent = "Retornar ao Início";
        retornarAoInicioButton.classList.add("calcular-button");
        retornarAoInicioButton.addEventListener("click", function () {
            retornarAoInicio();
        });

        notasContainer.appendChild(retornarAoInicioButton);
    });

    var continuarButton = document.querySelector(".calcular button");
    continuarButton.style.display = "none";

    notasContainer.appendChild(calcularButton);
}

function retornarAoInicio() {
    location.reload();
}









