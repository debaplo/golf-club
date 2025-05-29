<?php
// filepath: php/db.php
$host = 'localhost';
$dbname = 'c9223060_golf'; 
$username = 'c9223060_golf'; // проверьте правильное имя, указанное в панели Beget
$password = 'Nastya123.';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
?>