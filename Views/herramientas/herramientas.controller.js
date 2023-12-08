/** @format */

//archivo de donde llamar al procedimiento
//controlador

function init() {
  $('#Modal_usuario').on('submit', function (e) {
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

const eliminar = async(herramientaId) => {
  const todos = new Herramientas_Model('', '', '', '', '', 'todos');
  await todos.eliminar(herramientaId);
  await todos.todos();
};

const guardaryeditar = async e => {
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
  e.target.reset();
};

const editar = async (e) => {
  const herramienta = new Herramientas_Model('', '', '', '', '', 'todos');
  const actualHerramienta = await herramienta.ver(e);
   $('#Modal_usuario').modal('show');
   $('#staticBackdropLabel').text('Editar Herramienta');
   $('#Nombre').val(actualHerramienta.Nombre);
   $('#Precio').val(actualHerramienta.Precio);
   $('#Cantidad').val(actualHerramienta.Cantidad);
   $('#Categoria').val(actualHerramienta.Categoria);
   $('#Descripcion').val(actualHerramienta.Descripcion);
}

init();
