<?php
$nombre_servidor = "localhost";
$usuario = "root";
$contra = "";
$basededatos = "idiomania";
$conexion = new mysqli($nombre_servidor,$usuario,$contra,$basededatos);

if($conexion->connect_error){
    die("Conexión fallida: ". $conexion->connect_error);
}

$var_nom_jugador = $_GET["nombre_usuario"];
$var_puntuacion = $_GET["puntuacion_final"];
$consulta = "INSERT INTO puntuaciones (nombre_usuario, puntuacion_final) VALUES ('$var_nom_jugador','$var_puntuacion')";
$resultado = $conexion->query($consulta);

if($resultado->num_rows>0){
    print"Insertado correctamente";
}
else{
    print"Error al insertar los valores: ".$conexion->error;
}
?>