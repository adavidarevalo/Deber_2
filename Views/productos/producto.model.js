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
    $.get('../../Controllers/productos.controller.php?op=' + this.Ruta, res => {
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
      $('#tabla_productos').html(html);
    });
  }

  insertar() {
    var dato = new FormData();
    dato = this.Rol;
    $.ajax({
      url: '../../Controllers/productos.controller.php?op=insertar',
      type: 'POST',
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === 'ok') {
          Swal.fire('productos', 'Proucto Registrado', 'success');
          todos_controlador();
        } else {
          Swal.fire('Error', res, 'error');
        }
      },
    });
    this.limpia_Cajas();
  }

  eliminar(productoId) {
    var dato = new FormData();
    dato.append('id', productoId);
    $.ajax({
      url: '../../Controllers/productos.controller.php?op=eliminar',
      type: 'POST',
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res === 'ok') {
          Swal.fire('productos', 'Proucto Eliminado', 'success');
          todos_controlador();
        } else {
          Swal.fire('Error', res, 'error');
        }
      },
    });
  }

  limpia_Cajas() {
    document.getElementById('Nombre').value = '';
    document.getElementById('Precio').value = '';
    document.getElementById('Cantidad').value = '';
    document.getElementById('Categoria').value = '';
    document.getElementById('Descripcion').value = '';
    $('#Modal_usuario').modal('hide');
  }
}
