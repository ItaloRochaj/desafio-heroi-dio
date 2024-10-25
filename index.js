
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

    // Saída
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}

// Importa o módulo 'readline' para entrada de dados
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar se o usuário quer continuar
function perguntar() {
    readline.question('Você gostaria de classificar outro herói? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            solicitarDados();
        } else {
            console.log('Obrigado por usar o classificador de heróis!');
            readline.close();
        }
    });
}

// Função para solicitar dados do herói
function solicitarDados() {
    readline.question('Digite o nome do herói: ', (nome) => {
        readline.question('Digite a quantidade de experiência (XP) do herói: ', (xpInput) => {
            const experiencia = parseInt(xpInput);
            if (isNaN(experiencia)) {
                console.log("Por favor, insira um número válido para a experiência.");
                perguntar();
            } else {
                classificarHeroi(nome, experiencia);
                perguntar();
            }
        });
    });
}

// Inicia o processo
solicitarDados();
