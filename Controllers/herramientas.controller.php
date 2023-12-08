<?php
require_once('../Models/cls_herramientas.model.php');
$Herramientas = new Clase_Herramientas;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $Herramientas->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
    case "uno":
        $UsuarioId = $_POST["UsuarioId"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $usuarios->uno($UsuarioId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $nombre = $_POST["Nombre"];
        $precio = $_POST["Precio"];
        $cantidad = $_POST["Cantidad"];
        $categoria = $_POST["Categoria"];
        $descripcion = $_POST["Descripcion"];

        $datos = array(); //defino un arreglo
        $datos = $Herramientas->insertar($nombre, $precio, $cantidad, $categoria, $descripcion); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $UsuarioId = $_POST["UsuarioId"];
        $Cedula = $_POST["Cedula"];
        $Nombres = $_POST["Nombres"];
        $Apellidos = $_POST["Apellidos"];
        $Telefono = $_POST["Telefono"];
        $Contrasenia = $_POST["Contrasenia"];
        $Correo = $_POST["Correo"];
        $Rol = $_POST["Rol"];

        $datos = array(); //defino un arreglo
        $datos = $usuarios->actualizar($UsuarioId, $Cedula, $Nombres, $Apellidos, $Telefono, $Contrasenia, $Correo, $Rol); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'eliminar':
        $herramientaId = $_POST["id"];
        $Herramientas->eliminar($herramientaId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode("ok"); //devuelvo el arreglo en formato json
        break;
    default:
        break;
}
