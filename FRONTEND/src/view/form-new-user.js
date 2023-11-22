const formNewUser = {
  build: () => {
    const root = document.getElementById("root");
    const formTemplate = document.createElement("form");
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm");
    formTemplate.innerHTML = `
      <h3 class="mt-4 text-center">Cadastro de Novo Usuário</h3>
      <div class="container border border-secundary p-4 rounded">
        <label class="form-label" for="nome">Nome:</label>    
        <input required class="form-control" name="nome" type="text" id="nome" placeholder="Nome">
        <label class="form-label" for="idade">Idade:</label>
        <input required class="form-control" min="0" name="idade" type="number" id="idade" placeholder="Idade">
        <label class="form-label" for="login">Login:</label>
        <input required class="form-control" name="login" type="senha" id="login" placeholder="Login">
        <label class="form-label" for="senha">Senha:</label>
        <input required class="form-control" name="senha" type="password" id="senha"  placeholder="Senha">
        <button type="submit" id="btnSub" class="btn btn-primary mt-3">Salvar</button>
      </div>
      `;
    root.appendChild(formTemplate);
  },
  update: (user) => {
    nome.value = user.getNome();
    idade.value = user.getIdade();
    login.value = user.getLogin();
    senha.value = user.getSenha();
  },
};
export { formNewUser };
