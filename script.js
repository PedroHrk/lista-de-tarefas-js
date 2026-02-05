// Cria um Array (lista) vazio para armazenar os dados das tarefas na memória do script
let tarefas = [];

function adicionarTarefa() {
    // Define a string que será exibida como confirmação para o usuário
    const mensagem = "Tarefa adicionada com sucesso!";

    // Captura o elemento de input e o texto digitado (removendo espaços extras com .trim())
    let input = document.getElementById("inputTarefa"); 
    let textoTarefa = input.value; 

    // Estrutura de Condição: Verifica se o campo não está vazio
    if (textoTarefa.trim() === "") {
        alert("Digite algo antes de adicionar!");
        return; // Interrompe a função aqui se estiver vazio
    } else {
        // Se houver texto: exibe a mensagem de sucesso no elemento HTML correspondente
        document.getElementById("mensagem").textContent = mensagem;

        // Adiciona o novo texto ao final do Array 'tarefas'
        tarefas.push(textoTarefa);

        // Chama a função responsável por atualizar a lista visual na tela
        renderizarTarefas();
    }

    // Limpa o campo de texto e coloca o cursor de volta nele para a próxima digitação
    input.value = "";
    input.focus();
}

function renderizarTarefas() {
    // Seleciona o elemento pai (a lista <ul> ou <ol>) no HTML
    let listaTarefas = document.getElementById("listaTarefas");
    
    // Limpa todo o conteúdo atual da lista para evitar duplicados ao redesenhar
    listaTarefas.innerHTML = "";

    // Laço de Repetição (Loop): Percorre o Array 'tarefas' do início ao fim
    for (let i = 0; i < tarefas.length; i++) {
        // Para cada item no Array, cria um novo elemento HTML <li>
        let novaTarefa = document.createElement("li");

        // Define o texto do <li> como o valor que está na posição [i] do Array
        novaTarefa.textContent = tarefas[i];

        // Cria um elemento de botão para remover a tarefa
        let botaoRemover = document.createElement("button");
        // Atribui uma classe CSS para estilização posterior
        botaoRemover.className = "remover";
        // Define o texto que aparece dentro do botão
        botaoRemover.textContent = "remover";
        // Define a ação do clique: chama removerTarefa passando o índice atual (i)
        botaoRemover.onclick = () => removerTarefa(i)

        // Cria um elemento de botão para editar a tarefa
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        // Define a ação do clique: chama editarTarefa passando o índice atual (i)
        botaoEditar.onclick = () => editarTarefa(i)

        // Adiciona os botões criados dentro do item da lista (li)
        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        
        // Insere o <li> criado dentro da lista pai no HTML
        listaTarefas.appendChild(novaTarefa);
    }
}

// Função para excluir uma tarefa específica da lista
function removerTarefa(i) {
    // Remove 1 item do array 'tarefas' na posição do índice 'i'
    tarefas.splice(i, 1)
    // Atualiza a tela para mostrar a lista sem o item removido
    renderizarTarefas()
}

// Função para modificar o texto de uma tarefa existente
function editarTarefa(i) {
    // Exibe uma caixa de entrada para o usuário digitar o novo nome
    let tarefaEditada = prompt("Edite a tarefa:")
    // Valida se o campo não está vazio ou se o usuário não cancelou
    if (tarefaEditada.trim() !== "") {
        // Substitui o valor antigo no array pelo novo valor digitado
        tarefas[i] = tarefaEditada
        // Atualiza a lista na tela com o novo nome
        renderizarTarefas()
    }
}

// Função para apagar todas as tarefas de uma vez
function limparLista(){
    // Define o tamanho do array como zero, esvaziando-o completamente
    tarefas.length = 0
    // Limpa a interface visual
    renderizarTarefas()
    // Exibe o feedback visual de que a lista foi limpa
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}

// Configuração do Event Listener: Captura o input para monitorar o teclado
let input = document.getElementById("inputTarefa");

input.addEventListener("keypress", function(event) {
    // Se a tecla pressionada for o "Enter"
    if (event.key === "Enter") {
        // Previne o comportamento padrão (como recarregar a página se fosse um formulário)
        event.preventDefault();
        // Dispara a função de adicionar
        adicionarTarefa();
    }
});
