# Desafios para a seleção de estágio da Panvel
A rede de farmácias [Panvel](https://www.panvel.com/) propôs dois desafios para os alunos da [FACCAT - Faculdades Integradas de Taquara](https://www2.faccat.br/portal/) que desejam ingressar no mercado de TI como estagiários.

## Os desafios são:
1. Criar um programa para criptografar uma mensagem utilizando-se do alfabeto e de um número inteiro para rotacionar e substituir a letra do texto pela nova.
2. Criar um programa para exibir qual cachorro (Bob ou Rex) conseguirá capturar o gato (Oli), ou se o gato conseguirá fugir.

### Observações
A execução dos arquivos é realizada diretamente no terminal integrado do VScode através do Node e um módulo chamado "prompt-sync"
Ele é declarado como uma constante no inicio do programa e, nesse caso, funciona como um input de dados para o usuário digitar os dados necessários para que o programa seja executado corretamente. Desta forma: ``const prompt = require('prompt-sync')();``
### Exemplo:
![exemploPromptSync](https://github.com/user-attachments/assets/fb37444e-13b1-481d-9734-af05b6b34fd3)

## Orientações para executar os arquivos dos desafios:
### 1. Ter o [Visual Studio Code](https://code.visualstudio.com/download) instalado;
### 2. Baixar a extensão **Code Runner** na aba extensões do Visual Studio Code;

   #### Orientações - Code Runner:
   1. Abrir a aba de extensões do VSCode;
   2. Digitar "Code Runner" na barra de pesquisa;
   3. Selecionar a opção que corresponde a está imagem:
      ![orientacaoCodeRunner](https://github.com/user-attachments/assets/9f6a6a38-20af-476c-90d2-f0217f094828)
   4. Clicar no botão de "Instalar".
      
### 4. Instalar o Node na máquina (Pode ser a versão LTS que consta no download da página inicial);

   #### Orientações - Node:
   1. Entrar na [página oficial do Node](https://nodejs.org/pt);
   2. Clicar no botão de Download;
   3. Instalando o módulo Prompt-Sync: **(Ignorar se baixar todos os arquivos)**
      + instalar o prompt-sync para conseguir fazer a entrada de dados no console por meio do comando ``npm install prompt-sync`` no terminal integrado do VSCode;
      + OBS: Instalar o módulo na pasta que contém os arquivos a serem executados.
           1. Abra a pasta que contém os aquivos .js com o VSCode;
           2. Crie um teminal;
           3. Execute o comando ``npm install prompt-sync``.
   
### 6. Baixar todos os arquivos deste repositório.
   
   #### Orientações - Execução:
   1. Com todos os arquivos baixados, o Node e a extensão Code Runner instalados, abra a pasta onde os arquivos estão salvos com o VSCode;
   2. Clique em executar no botão circulado igual ao da imagem:
      ![orientacaoExecucao](https://github.com/user-attachments/assets/0c7d8f31-539d-43ac-ba81-4d2f15232f40)
   3. Execute e teste o programa.
