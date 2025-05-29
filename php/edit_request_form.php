<?php
require 'db.php';

if (!isset($_GET['id'])) {
    echo "Не указан ID заявки.";
    exit;
}

$id = $_GET['id'];

$stmt = $pdo->prepare("SELECT * FROM club_requests WHERE id = :id");
$stmt->execute([':id' => $id]);
$request = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$request) {
    echo "Заявка с ID {$id} не найдена.";
    exit;
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Редактирование заявки</title>
</head>
<body>
    <h1>Редактировать заявку ID: <?= htmlspecialchars($request['id']) ?></h1>
    <form action="edit_request.php" method="POST">
        <input type="hidden" name="id" value="<?= htmlspecialchars($request['id']) ?>">
        
        <label>Имя:</label>
        <input type="text" name="name" value="<?= htmlspecialchars($request['name']) ?>" required><br>
        
        <label>Email:</label>
        <input type="email" name="email" value="<?= htmlspecialchars($request['email']) ?>"><br>
        
        <label>Телефон:</label>
        <input type="text" name="phone" value="<?= htmlspecialchars($request['phone']) ?>" required><br>
        
        <label>Тип заявки:</label>
        <input type="text" name="request_type" value="<?= htmlspecialchars($request['request_type']) ?>" required><br>
        
        <label>Курс:</label>
        <input type="text" name="course_name" value="<?= htmlspecialchars($request['course_name']) ?>"><br>
        
        <label>Пакет:</label>
        <input type="text" name="package_name" value="<?= htmlspecialchars($request['package_name']) ?>"><br>
        
        <button type="submit">Обновить заявку</button>
    </form>
</body>
</html>