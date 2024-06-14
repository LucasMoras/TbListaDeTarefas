// Função para adicionar uma nova tarefa à lista
function addTarefas() {
    const taskInput = document.getElementById('taskInput'); // Obtém o input de tarefa
    const taskList = document.getElementById('taskList'); // Obtém a lista de tarefas
    const taskText = taskInput.value.trim(); // Obtém o valor do input e remove espaços de tarefa

    // Verifica se o texto da tarefa não está vazio
    if (taskText !== '') {
        const listItem = document.createElement('li'); // Cria um novo item
        listItem.textContent = taskText; // Define o texto do item de lista

        // Cria o botão de apagar
        const deleteBTN = document.createElement('span');
        deleteBTN.textContent = ' X'; // Define o texto do botão
        deleteBTN.className = 'delete'; // Define a classe CSS para o botão
        deleteBTN.onclick = function () { // Adiciona um evento de clique para apagar a tarefa
            taskList.removeChild(listItem); // Remove o item da lista de tarefas
        };

        listItem.appendChild(deleteBTN); // Adiciona o botão ao item de lista
        taskList.appendChild(listItem); // Adiciona o item de lista à lista de tarefas
        taskInput.value = ''; // Limpa o input de tarefa
    }
}

// Adiciona um evento de tecla ao input de tarefa
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
        addTarefas(); // Chama a função para adicionar a tarefa
    }
});

