<?php 
    session_start();
?>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció</title>
    <link rel="stylesheet" href="css/design.css">
</head>
<body>
    <h3 id="error_text"></h3>
<div id="container">
    <form action="POST" name="form" id="form">
    <span id>A *-al megjelölt mezők kitöltése kötelező!</span>
        <div id="nevDiv">
            <select name="elotag" id="elotag">
                <option value=""></option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
                <option value="Ifj.">Ifj.</option>
                <option value="Özv.">Özv.</option>
            </select>
            <label for="vezetekNev">Vezetéknév*</label>
            <input type="text" name="vezetekNev" id="vezetekNev">
            <label for="keresztNev">Keresztnév*</label>
            <input type="text" name="keresztNev" id="keresztNev"> <br>
        </div>
        <div id="emailDiv">
            <label for="email">E-mail cím*</label>
            <input type="email" name="email" id="email">
        </div>
        <div id="valasztasDiv">
            <div id="nemDiv">
                <p>Neme</p>
                <label for="ferfi">Férfi</label>
                <input type="radio" name="nem" value="Férfi" id="ferfi"><br>

                <label for="no">Nő</label>
                <input type="radio" name="nem" value="Nő" id="no"><br>

                <label for="egyebNem">Egyéb</label>
                <input type="radio" name="nem" value="Egyéb" id="egyeb"><br>
            </div>
            <div id="hirlevelDiv">
                <label for="hirLevel">Feliratkozol a hírlevélre?</label>
                <input type="checkbox" name="hirLevel" id="hirLevel" value="hirLevelIgen">
            </div>
        </div>
        <div class="clearFloat"></div>
        <div id="egyebDiv">
            <label for="egyebInfo">Egyéb információk</label><br>
            <input type="textarea" name="egyebInfo" id="egyebInfo">
        </div>
        <span id="submitDiv">
            <input type="submit" id="submitBTN" name="submitBTN" value="Elküldés">
        </span>
    </form>
</div>
<h1 id="listaLink"><a href="lista.php">Lista mutatása</a></h1>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/events.js"></script>
</body>
</html>