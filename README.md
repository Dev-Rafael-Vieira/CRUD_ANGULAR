# Projeto Angular de Formulário com Cadastro de Pessoas

Este é um projeto Angular que implementa um formulário para cadastro de pessoas, com operações de CRUD (Criar, Ler, Atualizar e Deletar) de forma simplificada. O projeto utiliza `Reactive Forms` do Angular para validação e controle dos dados inseridos.

## Funcionalidades

1. **Cadastro** - Permite cadastrar uma nova pessoa preenchendo nome, idade e cidade.
2. **Validações** - Validações são aplicadas a cada campo:
   - **Nome**: Obrigatório e mínimo de 3 caracteres.
   - **Idade**: Obrigatória, valores entre 0 e 120.
   - **Cidade**: Obrigatória e mínimo de 3 caracteres.
3. **Listagem** - As pessoas cadastradas são exibidas em uma tabela.
4. **Selecionar para Alteração** - Permite selecionar uma pessoa para atualização dos dados.
5. **Alterar** - Modifica os dados de uma pessoa existente.
6. **Remover** - Exclui uma pessoa do cadastro.
7. **Cancelar** - Limpa o formulário e reseta os botões.

## Tecnologias Utilizadas

- **Angular**: Framework principal do projeto.
- **Reactive Forms**: Para gerenciamento de formulários e validação.
- **Bootstrap**: Para estilização dos componentes.

## Estrutura do Projeto

- **home.component.ts**: Contém a lógica principal do componente, incluindo a criação do formulário e as funções para cadastrar, selecionar, alterar e remover.
- **home.component.html**: Estrutura do layout, incluindo o formulário com validação e uma tabela para exibir os dados cadastrados.
- **modelo/Pessoa.ts**: Interface que define o modelo de dados da pessoa.

## Código Principal

### Componente TypeScript (`home.component.ts`)

Este arquivo contém:
- Definição do `FormGroup` com campos `nome`, `idade` e `cidade`.
- Funções de **cadastrar**, **selecionar**, **alterar**, **remover** e **cancelar**.
- Manipulação de visibilidade dos botões (por exemplo, "Cadastrar" ou "Alterar").

### Template HTML (`home.component.html`)

Este arquivo define:
- Estrutura do formulário com campos de entrada para `nome`, `idade` e `cidade`.
- Mensagens de erro que aparecem quando as validações de formulário não são atendidas.
- Botões que mudam de acordo com o estado do formulário (cadastrar, alterar, remover e cancelar).
- Tabela para exibir a lista de pessoas cadastradas, com opção de seleção para editar os dados.
