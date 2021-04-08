<?php // nexss-compiler: php8ini
try {
    $db = new PDO("sqlite::memory:");
    $query = "SELECT datetime('now'), datetime('now','localtime')";
    $row = $db->query($query);
    $result = $row->fetch(PDO::FETCH_NUM);
    echo "DATE TIME FROM SQLITE: " . $result[0];
} catch (PDOException $e) {
    echo $e->getMessage();
}
