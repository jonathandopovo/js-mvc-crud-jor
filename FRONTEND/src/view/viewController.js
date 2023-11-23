import { formComponent } from "./form-component.js";
import { tableComponent } from "./table-component.js";

const view = {
  render: () => {
    formComponent.render();
    tableComponent.render();
  },
  update: (users, user) => {
    tableComponent.update(users);
    formComponent.update(user);
  },
  updateForm: (user) => {
    formComponent.update(user);
  },
};

export { view };
