/* Vitor Hugo Otto */
/* Programa para descobrir quem irá pegar o gato ou se o gato irá fugir */
/* OBS: é necessário ter o node instalado na máquina, pois esse programa foi criado para receber as informações por um módulo do "node", o "prompt-sync" */

const prompt = require(`prompt-sync`)(); // Importa o módulo prompt-sync    

main(); // chama a função principal para iniciar o programa

function animalVencedor(bob, rex, oli) { // FUNÇÃO DA TAREFA - ANIMAL VENCEDOR
    // calcula a distancia entre os cachorros e o gato
    const distanciaRex = Math.abs(oli - rex);
    const distanciaBob = Math.abs(oli - bob);

    // casos em que Oli é o vencedor
    if (distanciaBob - distanciaRex === 0) { // se a diferença das distâncias for igual a zero significa que os dois cachorros estão na mesma posição mas em direções opostas (positiva e negativa)
        return 'Oli';
    } else if (rex === oli && bob === oli && rex === bob) { // se os três estiverem na mesma posição
        return 'Oli';
    } else { // se Oli não for o vencedor
        if (distanciaBob < distanciaRex) { // se a distância de Bob for MENOR que a de Rex
            return 'Bob';
        } else if (distanciaBob > distanciaRex) { // se a distância de Bob for MAIOR que a de Rex
            return 'Rex';
        } else { // se a distância de Bob for IGUAL a de Rex
            return 'Oli';
        }
    }
}

function entrada(posicao) { // função para entrada de dados
    console.log('\nInsira a posição de cada animal: ');
    let oli = parseInt(prompt('Insira a posição de Oli: '));
    if (posicao === undefined) { // se a posição não for passada como argumento
        oli = verificarEntrada(oli);
    } else { // se a posição for passada como argumento
        oli = verificarEntrada(posicao);
    }
    let bob = parseInt(prompt('Insira a posição de Bob: '));
    if (posicao === undefined) { // se a posição não for passada como argumento
        bob = verificarEntrada(bob);
    } else { // se a posição for passada como argumento
        bob = verificarEntrada(posicao);
    }
    let rex = parseInt(prompt('Insira a posição de Rex: '));
    if (posicao === undefined) { // se a posição não for passada como argumento
        rex = verificarEntrada(rex);
    } else { // se a posição for passada como argumento
        rex = verificarEntrada(posicao);
    }
    return { bob, rex, oli };
}

function verificarEntrada(posicao) { // função para verificar se a entrada de dados é numeração
    while (isNaN(posicao)) { // se não for número solicita a posição novamente
        console.log('Digite um número válido.');
        posicao = parseInt(prompt('Insira a posição: '));
    }
    return posicao;
}

function saida(bob, rex, oli) { // função para saída de dados

    console.log('\n<<-- ANIMAL VENCEDOR -->>');
    console.log(`O animal vencedor é: ${animalVencedor(bob, rex, oli)}`);

    if (animalVencedor(bob, rex, oli) === 'Bob') { // se bob for o vencedor
        console.log('\nBob pegou o gato. Bob é o vencedor.\n');
        if ((bob > oli) && (rex > oli)) { // se bob e rex estiverem a frente de oli
            console.log('1. --O--B--R-------------');
            console.log('2. --O-B--R--------------');
            console.log('3. --OB--R---------------\n');
        } else if ((bob < oli) && (rex < oli)) { // se bob e rex estiverem atrás de oli
            console.log('1. --R--B--O-------------');
            console.log('2. ---R--B-O-------------');
            console.log('3. ----R--BO-------------\n');
        } else if ((bob > oli) && (rex < oli)) { // se bob estiver a frente e rex atrás de oli
            console.log('1. --R-----O--B----------');
            console.log('2. ---R----O-B-----------');
            console.log('3. ----R---OB------------\n');
        } else if ((bob < oli) && (rex > oli)) { // se rex estiver a frente e bob atrás de oli
            console.log('1. --B--O-----R----------');
            console.log('2. ---B-O----R-----------');
            console.log('3. ----BO---R------------\n');
        } else if (bob === oli && rex !== oli) {
            console.log('1. --OB--R---------------');
            console.log('2. --OB--R---------------');
            console.log('3. --OB--R---------------\n');
        }
    } else if (animalVencedor(bob, rex, oli) === 'Rex') { // se rex for o vencedor
        console.log('\nRex pegou o gato. Rex é o vencedor.\n');
        if ((bob > oli) && (rex > oli)) { // se bob e rex estiverem a frente de oli
            console.log('1. --O--R--B-------------');
            console.log('2. --O-R--B--------------');
            console.log('3. --OR--B---------------\n');
        } else if ((bob < oli) && (rex < oli)) { // se bob e rex estiverem atrás de oli
            console.log('1. --B--R--O-------------');
            console.log('2. ---B--R-O-------------');
            console.log('3. ----B--RO-------------\n');
        } else if ((bob > oli) && (rex < oli)) { // se bob estiver a frente e rex atrás de oli
            console.log('1. --R--O-----B----------');
            console.log('2. ---R-O----B-----------');
            console.log('3. ----RO---B------------\n');
        }   else if ((bob < oli) && (rex > oli)) { // se rex estiver a frente e rex atrás de oli
            console.log('1. --B-----O--R----------');
            console.log('2. ---B----O-R-----------');
            console.log('3. ----B---OR------------\n');
        } else if (rex === oli && bob !== oli) {
            console.log('1. --OR--B---------------');
            console.log('2. --OR--B---------------');
            console.log('3. --OR--B---------------\n');
        }
    } else { // se nenhum for o vencedor
        console.log('\nOli fugiu, os dois cachorros chegaram ao mesmo tempo. Nenhum cachorro é o vencedor.\n');
        if ((bob > oli) && (rex > oli)) {
            console.log('1. --O--BR---------------');
            console.log('2. --O-BR----------------');
            console.log('3. --OBR-----------------');
            console.log('\nBob e Rex estão na mesma posição.\n');
        } else if ((bob < oli) && (rex < oli)) {
            console.log('1. --RB--O---------------');
            console.log('2. ---RB-O---------------');
            console.log('3. ----RBO---------------');
            console.log('\nBob e Rex estão na mesma posição.\n');
        } else if (bob === oli && rex === oli && bob === rex) {
            console.log('1. --ROB-----------------');
            console.log('2. --ROB-----------------');
            console.log('3. --ROB-----------------');
            console.log('\nTodos estavam na mesma posição.\n');
        } else {
            console.log('1. --R--O--B-------------');
            console.log('2. ---R-O-B--------------');
            console.log('3. ----ROB---------------');
            console.log('\nA distância entre Bob e Oli é igual a distância entre Rex e Oli.\n');
        }
    }
}

function verificarResposta(resp) { // função para verificar a resposta
    while (resp !== 's' && resp !== 'n') { // se a resposta não for s ou n solicita a resposta novamente
        console.log('Digite uma resposta válida.');
        resp = prompt('Deseja repetir o programa? (s/n) ');
    }
    if (resp === 's') { // se a resposta for s chama a função menuInicial
        menuInicial();
    } else { // se a resposta for n encerra o programa
        console.log('Programa encerrado.\n');
    }
    return resp;
}

function menuInicial() { // função para imprimir o menu

    console.log('\nDescrição do programa: ');
    console.log('Programa para verificar qual cachorro (Bob ou Rex) pegará o gato (Oli) ou se o gato conseguira fugir.');
    console.log('O gato está parado se alimentando e os dois cachorros se moverão de forma igual (na mesma "velocidade") em direção ao gato.');

    console.log('\n::MENU INICIAL::');
    console.log('-------------------------');
    console.log('|  Escolha uma opção:   |');
    console.log('| 1 - Iniciar           |');
    console.log('| 0 - Sair              |');
    console.log('-------------------------');

    let opcao = parseInt(prompt('Escolha uma opção: '));
    while (opcao !== 1 && opcao !== 0) { // se a opção não for 1 ou 0 solicita a opção novamente
        console.log('Digite uma opção válida.');
        opcao = parseInt(prompt('Escolha uma opção: '));
    }

    switch (opcao) { // verifica a opção escolhida
        case 0:
            console.log('Programa encerrado.\n');
            break;
        
        case 1:
            let { bob, rex, oli } = entrada();
            saida(bob, rex, oli);
            let resp = prompt('Deseja repetir o programa? (s/n) ');
            resp = verificarResposta(resp);
        default:
            break;
    }
    return opcao;
}

function main() { // função para iniciar o programa
    menuInicial();
}