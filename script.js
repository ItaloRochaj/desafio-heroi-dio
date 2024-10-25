// Função para classificar o herói
function classificarHeroi(nome, experiencia) {
    let nivel;

    // Estrutura de decisão para determinar o nível do herói
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Retorna a mensagem com o resultado
    return `O Herói de nome ${nome} está no nível de ${nivel}.`;
}

// Captura o formulário
const form = document.getElementById('heroForm');
const resultDiv = document.getElementById('result');

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevê o comportamento padrão de submissão

    const nome = document.getElementById('heroName').value;
    const experiencia = parseInt(document.getElementById('heroXP').value);

    // Classifica o herói e exibe o resultado
    const resultado = classificarHeroi(nome, experiencia);
    resultDiv.textContent = resultado;

    // Limpa os campos
    form.reset();
});
