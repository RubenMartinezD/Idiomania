<?php
class Leaderboard{
    public $nombre_usuario;
    public $puntuacion;

    function __construct($nombre_usuario,$puntuacion){
        $this->nombre_usuario=$nombre_usuario;
        $this->puntuacion=$puntuacion;
    }
}

$nombre_servidor = "localhost";
$usuario = "root";
$contra = "";
$basededatos = "idiomania";
$conexion = new mysqli($nombre_servidor,$usuario,$contra,$basededatos);

if($conexion->connect_error){
    die("Conexión fallida: ". $conexion->connect_error);
}

$consulta = "SELECT * FROM puntuaciones ORDER BY puntuacion_final DESC LIMIT 10";
$resultado = $conexion->query($consulta);
$array_puntuaciones = array();
if($resultado->num_rows>0){
    while($row = $resultado->fetch_assoc()){
        $aux_array_puntuaciones = new
        Leaderboard($row["nombre_usuario"],$row["puntuacion_final"]);
        array_push($array_puntuaciones,$aux_array_puntuaciones);
    }
}
else{
    print"Error al insertar los valores: ".$conexion->error;
}
echo json_encode($array_puntuaciones);
?>