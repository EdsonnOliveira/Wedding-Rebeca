<?php
    date_default_timezone_set('Brazil/east');

    try {
        $conn = new PDO('mysql:host=mysql937.umbler.com;port=41890;dbname=lucasrebeca','lucasrebeca','123lucasrebeca123');

    } catch (PDOException $e) {
        echo $e;
        die();
    }
?>