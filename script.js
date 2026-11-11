function calcular() {
    const nome = document.getElementById("nome").value;
    const metros = Number(document.getElementById("metros").value);
    const avista = document.getElementById("avista").checked;

    if (nome === "" || metros <= 0) {
        alert("Preencha o nome e uma metragem válida.");
        return;
    }

    // Fórmula: (850 * metros) e se for à vista, multiplica por 0.95 (que é o mesmo que tirar 5%)
    let total = 850 * metros;
    if (avista) total = total * 0.95;

    const caixa = document.getElementById("resultado");
    caixa.style.display = "block";
    caixa.innerHTML = "Olá, <strong>" + nome + "</strong>!<br>Total: <strong>R$ " + total.toFixed(2).replace(".", ",") + "</strong>";
}