<?php include 'includes/header.php'; ?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;
        redirect('members.php');
    } else {
        echo "<p class='error'>Invalid username or password.</p>";
    }
}
?>

<form method="post">
    <h2>Login</h2>
    <label>Username:</label>
    <input type="text" name="username" required>
    <label>Password:</label>
    <input type="password" name="password" required>
    <button type="submit">Login</button>
</form>

<?php include 'includes/footer.php'; ?>
