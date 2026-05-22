<?php
require_once __DIR__ . "/cors.php";
require_once __DIR__ . "/../config/database.php";

$sql = "SELECT id, title, image, issuer, year FROM certificates ORDER BY id DESC";
$result = $conn->query($sql);

$certificates = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $certificates[] = $row;
    }
}

echo json_encode([
    "status" => true,
    "message" => "Certificates loaded",
    "data" => $certificates
]);

$conn->close();
?>
