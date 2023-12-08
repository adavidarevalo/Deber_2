/** @format */

//archivo de donde llamar al procedimiento
//controlador

function init() {
  $('#form_herramientas').on('submit', function (e) {
    guardaryeditar(e);
  });
  $('.modal-footer .btn-secondary').on('click', function () {
    $('#form_herramientas')[0].reset();
  });
  $('#btn_open_new').on('click', function () {
  $('#staticBackdropLabel').text('Nueva Herramienta');
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

const guardaryeditar =  e => {
  e.preventDefault();
  const formData = new FormData();

  $(e.target)
    .serializeArray()
    .forEach(field => {
      formData.append(field.name, field.value);
    });

  const todos = new Herramientas_Model('', '', '', '', '', '');
  if (formData.get('UsuarioId')) {
    todos.editar(formData);
  } else {
    todos.insertar(formData);
  }
  e.target.reset();
    $('#Modal_usuario').modal('hide');
};

const editar = async e => {
  const herramienta = new Herramientas_Model('', '', '', '', '', 'todos');
  const actualHerramienta = await herramienta.ver(e);
  $('#Modal_usuario').modal('show');
  $('#staticBackdropLabel').text('Editar Herramienta');
  $('#Nombre').val(actualHerramienta.Nombre);
  $('#Precio').val(actualHerramienta.Precio);
  $('#Cantidad').val(actualHerramienta.Cantidad);
  $('#Categoria').val(actualHerramienta.Categoria);
  $('#Descripcion').val(actualHerramienta.Descripcion);
  $('#UsuarioId').val(actualHerramienta.id);
};

init();
