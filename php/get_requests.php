<?php
// filepath: php/get_requests.php
require 'db.php';

// Ссылка для добавления новой заявки (перенаправление на форму добавления, например add_request_form.html)
echo "<a href='add_request.php'>Добавить заявку</a><br><br>";

$stmt = $pdo->query("SELECT * FROM club_requests ORDER BY created_at DESC");
$requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<h1>Список заявок</h1>";
foreach ($requests as $request) {
    echo "<p>ID: {$request['id']}, Имя: {$request['name']}, Телефон: {$request['phone']}, Тип заявки: {$request['request_type']}";
    echo " <a href='edit_request_form.php?id={$request['id']}'>Редактировать</a>";
    echo " <form action='delete_request.php' method='POST' style='display:inline;'>
            <input type='hidden' name='id' value='{$request['id']}'>
            <button type='submit' onclick=\"return confirm('Вы уверены, что хотите удалить заявку?');\">Удалить</button>
          </form>";
    echo "</p>";
}
?>