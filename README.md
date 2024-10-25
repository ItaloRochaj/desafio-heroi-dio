# desafio-heroi-dio

# Classificador de Nível de Herói

## Descrição do Projeto

O projeto "Classificador de Nível de Herói" é uma aplicação interativa em JavaScript que permite classificar heróis com base na quantidade de experiência (XP) que eles possuem. Ele utiliza estruturas de controle como condicionais e laços de repetição para fornecer uma experiência dinâmica ao usuário.

## Objetivos

- Classificar heróis de acordo com suas experiências.
- Utilizar variáveis para armazenar informações do herói.
- Implementar estruturas de decisão para determinar o nível do herói.
- Permitir que o usuário insira informações sobre múltiplos heróis.

## Níveis de Classificação

Os heróis são classificados em diferentes níveis com base na experiência (XP) que possuem:

- **Ferro**: XP < 1.000
- **Bronze**: 1.001 ≤ XP ≤ 2.000
- **Prata**: 2.001 ≤ XP ≤ 5.000
- **Ouro**: 5.001 ≤ XP ≤ 7.000
- **Platina**: 7.001 ≤ XP ≤ 8.000
- **Ascendente**: 8.001 ≤ XP ≤ 9.000
- **Imortal**: 9.001 ≤ XP ≤ 10.000
- **Radiante**: XP ≥ 10.001

## Estrutura do Código

O código está organizado nas seguintes partes principais:

1. **Função de Classificação**: Avalia a experiência do herói e determina seu nível.
2. **Entrada de Dados**: Utiliza o módulo `readline` para capturar o nome e a experiência do herói.
3. **Loop de Interação**: Permite ao usuário classificar vários heróis em sequência, perguntando se deseja continuar após cada classificação.

### Exemplo de Uso

Ao executar o programa, o usuário é solicitado a inserir o nome e a experiência de um herói. Após a classificação, o usuário pode optar por classificar outro herói ou encerrar o programa.

### Conclusao

O "Classificador de Nível de Herói" é uma aplicação simples, porém eficaz, que demonstra conceitos fundamentais de programação, como variáveis, operadores, estruturas de decisão e laços de repetição. Este projeto pode ser ampliado para incluir mais funcionalidades, como salvamento de dados ou gráficos de desempenho dos heróis.


### Código

Aqui está um resumo do código:

```javascript
// classificadorDeHeroi.js

// Função para classificar o herói
function classificarHeroi(nome, experiencia) {
    // Estrutura de decisão para determinar o nível do herói
    ...
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}

// Importa o módulo 'readline' para entrada de dados
const readline = require('readline').createInterface({ ... });

// Função para solicitar dados do herói
function solicitarDados() {
    ...
}

# Inicia o processo
solicitarDados();
