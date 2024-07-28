/* Vitor Hugo Otto */
/* Programa para criptografar um texto utilizando o alfabeto e um número inteiro para alterar a letra com base no número de rotações especificado */
/* OBS: é necessário ter o node instalado na máquina, pois esse programa foi criado para receber as informações por um módulo do "node", o "prompt-sync" */

const prompt = require(`prompt-sync`)(); // Importa o módulo prompt-sync

main(); // chama a função para iniciar o programa

function criptografarTexto(texto, numPosicoes) { // FUNÇÃO DA TAREFA - CRIPTOGRAFAR TEXTO
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'; 
    let textoCrip = ''; // variável para armazenar o texto criptografrado

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase(); // pega a letra do texto e garante que será minuscula para rotacionar todas as letras do texto
        let pos = alfabeto.indexOf(letra); // pega a posição da letra no alfabeto

        if (pos === -1) { // se a letra não estiver no alfabeto
            textoCrip += letra; // adiciona a letra no texto criptografado
        } else { // se a letra estiver no alfabeto
            let novaPos = (pos + numPosicoes) % 26; // calcula a nova posição da letra no alfabeto
            textoCrip += alfabeto[novaPos]; // adiciona a letra da nova posição no texto criptografado
        }
    }
    console.log('\nTexto criptografado: ');
    return textoCrip; // retorna o texto criptografado
}

function menuInicial() { // funcao menu de opcoes

    console.log('\n::MENU INICIAL::');
    console.log('-------------------------');
    console.log('|  Escolha uma opção:   |');
    console.log('| 1 - Criptografar      |');
    console.log('| 0 - Fechar o programa |');
    console.log('-------------------------');

    let opcao = parseInt(prompt('Digite a opção: ')); // solicita a opção do menu
    opcao = validarOpcaoMenu(opcao); // chama a função para validar a opção do menu
    switch (opcao) { 
        case 1:
            // Entrada de dados
            let texto = entradaTexto(); // chama a função para entrada e verificação do texto
            let numPosicoes = validarNumPosicoes(); // chama a função para entrada e verificação do número de rotações

            // Saida dos dados
            console.log(criptografarTexto(texto, numPosicoes) + '\n');

            // Repetir o programa
            let resp = prompt('Deseja criptografar novamente? (s/n) '); // pergunta se deseja repetir o programa
            resp = validarResposta(resp); // chama a função para validar a resposta
            break;
        case 0:
            console.log('Programa encerrado.\n'); // encerra o programa
            break;
        default:
            break;
    }
}

function entradaTexto() { // função para entrada e verificação do texto

    console.log('\n::CRIPTOGRAFAR::\n');

    let texto = prompt('Insira o texto: ');
    // verificar se é numero
    while (!isNaN(texto)) { // se for número solicita o texto novamente
        console.log('Digite um texto válido.');
        texto = prompt('Insira o texto: ');
    }
    return texto;
}

function validarNumPosicoes() { // função para entrada e verificação do número de rotações
    let numPosicoes = parseInt(prompt('Insira o número de rotações: '));
    // verifica se o número de rotações é um número
    while (isNaN(numPosicoes)) { // se não for número solicita o número novamente
        console.log('Digite um número válido.');
        numPosicoes = parseInt(prompt('Insira o número de rotações: '));
    }
    return numPosicoes;
}

function validarOpcaoMenu(opcao) { // função para validar a opção do menu
    // valida a opção
    while (opcao != 0 && opcao != 1) { // se a opção for diferente de 0 e 1 retorna uma mensagem de erro e pede para digitar novamente
        console.log('Opção inválida');
        opcao = parseInt(prompt('Digite a opção: '));
    }
    return opcao;
}

function validarResposta(resp) { // função para validar a resposta para repetir o programa
    // valida a resposta
    while (resp != 's' && resp != 'n') { // se a resposta for diferente de s e n retorna uma mensagem de erro e pede para digitar novamente
        console.log('Resposta inválida.');
        resp = prompt('Deseja criptografar novamente? (s/n) ');
    }
    resp = resp.toLowerCase();
    if (resp === 's') { // se a resposta for n encerra o programa
        menuInicial();
    } else {
        console.log('Programa encerrado.\n');
    }
    return resp;
}

function main(opcao) { // função para iniciar o programa
    if (opcao != 0) { // se a opção for diferente de 0 chama a função menuInicial
        menuInicial();
    }
}