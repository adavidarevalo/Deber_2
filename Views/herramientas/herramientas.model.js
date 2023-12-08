/** @format */

class Herramientas_Model {
  constructor(Nombre, Precio, Cantidad, Categoria, Descripcion, Ruta) {
    this.Nombre = Nombre;
    this.Precio = Precio;
    this.Cantidad = Cantidad;
    this.Categoria = Categoria;
    this.Descripcionon = Descripcion;
    this.Ruta = Ruta;
  }
  todos() {
    var html = '';
    $.get('../../Controllers/herramientas.controller.php?op=' + this.Ruta, res => {
      res = JSON.parse(res);
      $.each(res, (index, valor) => {
        var fondo;
        if (valor.Rol == 'Administrador') fondo = 'bg-primary';
        else if (valor.Rol == 'Vendedor') fondo = 'bg-success';
        else if (valor.Rol == 'Cliente') fondo = 'bg-warning';
        else if (valor.Rol == 'Gerente') fondo = 'bg-danger';
        else if (valor.Rol == 'Cajero') fondo = 'bg-info';
        html += `<tr>
                <td>${valor.id}</td>
                <td>${valor.Nombre}</td>
                <td>${valor.Precio}</td>
                <td>${valor.Cantidad}</td>
                <td>${valor.Categoria}</td>
                <td>${valor.Descripcion}</td>
                <td><div class="d-flex align-items-center gap-2">
                <span class="badge ${fondo} rounded-3 fw-semibold">${valor.Rol}</span>
            </div></td>
            <td>
            <button class='btn btn-success' onclick='editar(${valor.id})'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${valor.id})'>Eliminar</button>
            <button class='btn btn-info' onclick='ver(${valor.id})'>Ver</button>
            </td></tr>
                `;
      });
      $('#tabla_herramientas').html(html);
    });
  }

  insertar(formData) {

    $.ajax({
      url: '../../Controllers/herramientas.controller.php?op=insertar',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === 'ok') {
          Swal.fire('herramientas', 'Herramienta Registrado', 'success');
          todos_controlador();
        } else {
          Swal.fire('Error', res, 'error');
        }
      },
    });
  }

  eliminar(herramientaId) {
    var dato = new FormData();
    dato.append('id', herramientaId);
    $.ajax({
      url: '../../Controllers/herramientas.controller.php?op=eliminar',
      type: 'POST',
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === 'ok') {
          Swal.fire('erramienta', 'Herramienta Eliminado', 'success');
        } else {
          Swal.fire('Error', res, 'error');
        }
      },
    });
  }

}
