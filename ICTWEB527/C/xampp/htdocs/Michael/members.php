<?php include 'includes/header.php'; ?>

<?php
if (!isLoggedIn()) {
    redirect('login.php');
}

$user = $_SESSION['user'];
?>

<h2>Welcome, <?php echo htmlspecialchars($user['username']); ?>!</h2>
<p>Your email: <?php echo htmlspecialchars($user['email']); ?></p>
<p>Member benefits: Exclusive discounts, early access to products, and more!</p>

<?php include 'includes/footer.php'; ?>
