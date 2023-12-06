/** @format */

//archivo de donde llamar al procedimiento
//controlador

function init() {
  $('#form_herramientas').on('submit', function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
  todos_controlador();
});

const todos_controlador = () => {
  const todos = new Herramientas_Model('', '', '', '', '', 'todos');
  todos.todos();
};


const eliminar = async herramientaId => {
  const todos = new Herramientas_Model('', '', '', '', '', 'todos');
  await todos.eliminar(herramientaId);
  await todos.todos();
};

const guardaryeditar = async (e) => {
  e.preventDefault();
  const formData = new FormData();

   $(e.target)
     .serializeArray()
     .forEach(field => {
      formData.append(field.name, field.value);
     });

  const todos = new Herramientas_Model('', '', '', '', '', '');
  await todos.insertar(formData);
    await todos.todos();
    document.getElementById('form_herramientas').reset();
    e

};


init();
// tabla_productos;