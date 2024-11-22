<?php
session_start();
require_once 'config.php';
require_once 'includes/functions.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/styles.css">
    <title>Flower Power</title>
</head>
<body>
<nav>
    <div>
        <a href="index.php">Home</a>
        <a href="register.php">Register</a>
        <a href="login.php">Login</a>
    </div>
    <button id="themeToggle">Toggle Dark Mode</button>
</nav>
<script src="theme.js"></script>

