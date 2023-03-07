<?php 

$model = $_POST['jsondata'];

//print_f($model);

$RefFile ="./cred.json";
// Ecriture dans le fichier 
$buffer= fopen($RefFile,"w");
fwrite($buffer,json_encode($model['jsondata']));
fclose($buffer);

?>

