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
        $Nombre = $_POST["Nombre"];
        $Precio = $_POST["Precio"];
        $Cantidad = $_POST["Cantidad"];
        $Categoria = $_POST["Categoria"];
        $Descripcion = $_POST["Descripcion"];

        $datos = array(); //defino un arreglo
        $datos = $Herramientas->actualizar($UsuarioId, $Nombre, $Precio, $Cantidad, $Categoria, $Descripcion); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'eliminar':
        $herramientaId = $_POST["id"];
        $Herramientas->eliminar($herramientaId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode("ok"); //devuelvo el arreglo en formato json
        break;
    case "ver":
        $HerramientaId = $_GET["id"]; // Cambiado de UsuarioId a HerramientaId
        $datos = array();
        $datos = $Herramientas->uno($HerramientaId); // Cambiado de $usuarios a $Herramientas
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;

    default:
        break;
}
