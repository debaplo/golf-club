<?php
ob_start(); // Запускаем буферизацию вывода
require 'db.php'; // Подключаемся к базе данных

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Если данные пришли из футера, используем префиксы или обычные имена
    $name  = $_POST['footer_name'] ?? $_POST['name'] ?? '';
    $email = $_POST['footer_email'] ?? $_POST['email'] ?? '';
    $phone = $_POST['footer_phone'] ?? $_POST['phone'] ?? '';
    $request_type = $_POST['request_type'] ?? 'general';
    $course_name  = $_POST['course_name'] ?? null;
    $package_name = $_POST['package_name'] ?? null;
    
    // Минимальная проверка обязательных полей
    if (empty($name) || empty($phone) || empty($request_type)) {
        $error = "Пожалуйста, заполните все обязательные поля.";
    }
    
    // Проверка email, если введён
    if (!isset($error) && !empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Некорректный email.";
    }
    
    // Если нет ошибок, вставляем данные в таблицу club_requests
    if (!isset($error)) {
        $stmt = $pdo->prepare("INSERT INTO club_requests (name, email, phone, request_type, course_name, package_name, created_at) 
                           VALUES (:name, :email, :phone, :request_type, :course_name, :package_name, NOW())");
        try {
            $stmt->execute([
                ':name'         => $name,
                ':email'        => $email,
                ':phone'        => $phone,
                ':request_type' => $request_type,
                ':course_name'  => $course_name,
                ':package_name' => $package_name
            ]);
            $success = true;
        } catch (PDOException $e) {
            $error = "Ошибка при выполнении запроса: " . $e->getMessage();
        }
    }
    
    ob_end_clean();
    
    // Отдаем JSON-ответ для AJAX-запроса
    header('Content-Type: application/json');
    if (isset($success) && $success) {
        echo json_encode(['success' => true, 'message' => "Ваша заявка принята. Мы свяжемся с вами в ближайшее время."]);
    } else {
        echo json_encode(['success' => false, 'message' => $error]);
    }
    exit();
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Добавить заявку</title>
</head>
<body>
    <h2>Добавить заявку</h2>
    <!-- Форма для ручного ввода данных (Fallback, если не AJAX) -->
    <form action="./php/add_request.php" method="POST">
        <label for="name">Имя:</label>
        <input type="text" name="name" id="name" required><br>
        
        <label for="email">Email:</label>
        <input type="email" name="email" id="email"><br>
        
        <label for="phone">Телефон:</label>
        <input type="text" name="phone" id="phone" required><br>
        
        <label for="request_type">Тип заявки:</label>
        <select name="request_type" id="request_type" required>
            <option value="general" selected>Общая</option>
            <option value="lesson">Курс</option>
            <option value="package">Пакет</option>
        </select><br>
        
        <label for="course_name">Курс:</label>
        <input type="text" name="course_name" id="course_name"><br>
        
        <label for="package_name">Пакет:</label>
        <input type="text" name="package_name" id="package_name"><br>
        
        <button type="submit">Добавить заявку</button>
    </form>
</body>
</html>