<?php
require_once __DIR__ . "/cors.php";
require_once __DIR__ . "/../config/database.php";

$sql = "SELECT id, title, description, image, tech_stack, github_link, demo_link, category, created_at FROM projects ORDER BY created_at DESC";
$result = $conn->query($sql);

$projects = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

echo json_encode([
    "status" => true,
    "message" => "Projects loaded",
    "data" => $projects
]);

$conn->close();
?>
