<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

    require_once 'User.php';

    $userTest = new User("user1", "password1");
    echo "username: {$userTest->getUsername()} password {$userTest->getPassword()}";