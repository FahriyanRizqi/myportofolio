<?php
require_once __DIR__ . "/cors.php";
require_once __DIR__ . "/../config/database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

$name = trim($input["name"] ?? "");
$email = trim($input["email"] ?? "");
$message = trim($input["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    http_response_code(422);
    echo json_encode(["status" => false, "message" => "Name, email, and message are required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["status" => false, "message" => "Invalid email address"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["status" => true, "message" => "Message sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => false, "message" => "Failed to save message"]);
}

$stmt->close();
$conn->close();
?>
