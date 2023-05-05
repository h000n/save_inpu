<?php
$input = $_POST['input'];
$file = fopen('input.txt', 'a');
fwrite($file, $input . PHP_EOL);
fclose($file);
?>
