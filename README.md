# 📝 Task List Manager

Um gerenciador de tarefas elegante e funcional, desenvolvido com foco em manipulação dinâmica do DOM e lógica de arrays em JavaScript.

## 🎨 Design e Estilo
O projeto apresenta uma interface com cores terrosas e sóbrias, utilizando:
- **Flexbox**: Para centralização perfeita do conteúdo na tela.
- **Responsividade**: O container ajusta-se a diferentes tamanhos de tela (90% de largura com limite de 600px).
- **Feedback Visual**: Transições suaves (`ease`) ao passar o mouse sobre os botões e foco nos campos de entrada.

## 🚀 Funcionalidades Principais
- **Persistência em Array**: Todas as tarefas são gerenciadas em uma lista na memória do script.
- **CRUD Básico**:
  - **Create**: Adição de tarefas (via botão ou tecla Enter).
  - **Read**: Renderização automática da lista a cada modificação.
  - **Update**: Edição de tarefas existentes através de diálogos `prompt`.
  - **Delete**: Remoção individual de itens ou limpeza total da lista.
- **Validação**: Sistema que impede a adição de tarefas vazias ou compostas apenas por espaços.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estruturação semântica.
- **CSS3**: Estilização avançada com seletores de atributo, pseudo-classes (`:focus`, `:hover`) e sombras (`box-shadow`).
- **JavaScript (ES6)**: 
  - Manipulação de Arrays (`push`, `splice`, `length = 0`).
  - Event Listeners para interação com teclado.
  - Criação dinâmica de elementos (`createElement` e `appendChild`).

## 📚 Aprendizados
Este projeto foi fundamental para consolidar conceitos de:
1. Sincronização entre a lógica de dados (Array) e a interface visual (DOM).
2. Diferenciação de comportamentos de botões dentro de formulários (`type="button"` vs default).
3. Limpeza de fluxo de interface com `input.focus()` e `input.value = ""`.
