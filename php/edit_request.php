<?php
// filepath: php/edit_request.php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
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
        <form action="./edit_request.php" method="POST">
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
    <?php
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Обработка POST запроса для обновления заявки
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $request_type = $_POST['request_type'];
    $course_name = $_POST['course_name'] ?? null;
    $package_name = $_POST['package_name'] ?? null;

    $stmt = $pdo->prepare("UPDATE club_requests 
                           SET name = :name, email = :email, phone = :phone, request_type = :request_type, 
                               course_name = :course_name, package_name = :package_name 
                           WHERE id = :id");
    $stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':request_type' => $request_type,
        ':course_name' => $course_name,
        ':package_name' => $package_name
    ]);

    echo "Заявка с ID {$id} успешно обновлена!<br><br>";
    echo '<button onclick="window.location.href=\'get_requests.php\'">Вернуться к списку заявок</button>';
} else {
    echo "Некорректный метод отправки.";
}
?>