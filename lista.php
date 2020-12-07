<?php
    session_start();
    require "php/dbConn.php";
    $db = new dbConn();
    $db->__construct();
    $db->getConnection();
    $adatok = $db->adatok();
    //print_r($adatok);
?>

<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/design.css">
    <title>Lista</title>
</head>
<body>
    <div id="tableId">
    <table>
        <thead>
            <tr>
                <th>Előtag</th>
                <th>Vezetéknév</th>
                <th>Keresztnév</th>
                <th>E-mail</th>
                <th>Nem</th>
                <th>Hírlevél</th>
                <th>Egyéb infó</th>
                <th>Törlés</th>
            </tr>
        </thead>
        <?php
           foreach ($adatok as $key => $value) {
               echo "<tr>";
               for ($i=1; $i < count($value)/2; $i++) { 
                   echo "<td>";
                   echo $value[$i];
                   echo "</td>";
                }
                echo "<td> <button class=\"toroldLe\" value=\"$value[0]\">Törlés</button></td>";
                echo "</tr>";
            }
            
            ?>
    </table>
    </div>
    <h1 id="listaLink"><a href="index.php">Adatbevitel mutatása</a></h1>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/events.js"></script>
</body>
</html>