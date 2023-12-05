/** @format */

//archivo de donde llamar al procedimiento
//controlador

function init() {
  $('#form_herramientas').on('submit', function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
  //detecta carga de la pagina
  todos_controlador();
});

const todos_controlador = () => {
  const todos = new Herramientas_Model('', '', '', '', '', 'todos');
  todos.todos();
};

// const guardaryeditar = (e)=>{
//     e.preventDefault();
//     const formData = new FormData($("#form_usuarios")[0]);
//     const usuarios = new Usuarios_Model('','','','','','','',formData,'insertar');
//     usuarios.insertar();
// }

const eliminar = async productoId => {
  const todos = new Herramientas_Model('', '', '', '', '', 'todos');
  await todos.eliminar(productoId);
  await todos.todos();
};

init();
