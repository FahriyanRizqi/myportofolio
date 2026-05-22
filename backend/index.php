<?php
header("Content-Type: application/json; charset=UTF-8");
echo json_encode([
    "status" => true,
    "message" => "Portfolio API is running",
    "endpoints" => [
        "/backend/api/getProjects.php",
        "/backend/api/getCertificates.php",
        "/backend/api/addContact.php"
    ]
]);
?>
