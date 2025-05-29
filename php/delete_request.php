<?php
// filepath: php/delete_request.php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];

    $stmt = $pdo->prepare("DELETE FROM club_requests WHERE id = :id");
    $stmt->execute([':id' => $id]);

    echo "Заявка с ID {$id} успешно удалена!<br><br>";
    echo '<button onclick="window.location.href=\'get_requests.php\'">Вернуться к списку заявок</button>';
}
?>