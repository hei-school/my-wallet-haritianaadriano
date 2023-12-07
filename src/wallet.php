<?php

class Wallet {
    private $user;
    private $money;

    public function __constructor($user, $money) {
        $this->user = $user;
        $this->money = $money;
    }

    public function getUser() {
        return $this->user;
    }
    public function getMoney() {
        return $this->money;
    }
    public function setUser($user) {
        $this->user = $user;
    }
    public function setMoney($money) {
        $this->money = $money;
    }
}