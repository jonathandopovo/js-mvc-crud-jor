import { Usuario } from "./model/usuario.model.js";
import { view } from "./view/viewController.js";
import { dataService } from "./api/data.service.js";

let data = [];
const nullUser = new Usuario(null, null, null, null);
const submitType = { NEW: 0, UPDATE: 1 };
let submitState = submitType.NEW;
let currentId = null;

const loadData = async () => {
  const temp = await dataService.load();
  data = temp.map(
    (usuario) =>
      new Usuario(usuario.nome, usuario.idade, usuario.login, usuario.senha)
  );
  ("");
  view.update(data, nullUser);
};

const getFormInputs = () => {
  return new Usuario(nome.value, idade.value, login.value, senha.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const user = getFormInputs();
  if (submitState == submitType.NEW) {
    addUser(user);
  } else if (submitState == submitType.UPDATE) {
    updateUser(currentId, user);
    submitState = submitType.NEW;
    btnSub.innerText = "Salvar";
  }
  view.update(data, nullUser);
};

const addUser = (newUser) => {
  data.push(newUser);
  dataService.saveData(data);
};

const updateUser = (index, userToUpdate) => {
  data[index] = userToUpdate;
  dataService.saveData(data);
};

const deleteUser = (index) => {
  data.splice(index, 1);
  dataService.saveData(data);
};

const handleClick = (event) => {
  currentId = event.target.closest("tr").id.split("")[4];
  if (event.type == "click") {
    alert(
      `Clicou com o botão esquerdo, e o ${data[currentId]
        .getNome()
        .toUpperCase()} será carregado para edição!`
    );
    view.updateForm(data[currentId]);
    submitState = submitType.UPDATE;
    btnSub.innerText = "Update";
  } else if (event.type == "contextmenu") {
    event.preventDefault();
    if (event.button == 2) {
      const confirm = window.confirm(
        `Você tem certeza que deseja deletar o usuário ${data[currentId]
          .getNome()
          .toUpperCase()}?`
      );
      if (confirm) {
        deleteUser(currentId);
        view.update(data, nullUser);
      }
    }
  }
};

const setEvents = () => {
  const form = document.getElementById("signForm");
  form.addEventListener("submit", handleSubmit);
  const userList = document.getElementById("users-result");
  userList.addEventListener("click", handleClick);
  userList.addEventListener("contextmenu", handleClick);
};

const controller = {
  run: () => {
    view.render();
    setEvents();
    window.onload = () => {
      loadData();
    };
  },
};

export { controller };
