import map from '../maps/map.json'
import LoadTexturesClass from './LoadTexturesClass'

let DrawMapClass = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let newImg = new Image();
    let newImgMonster= new Image();
    let frameRate = 10;
    let hx = 100;
    let hy = 100;
    newImg.src = "./app/textures/grounds/grass/grass1_0.png";
    newImgMonster.src = "./app/textures/monsters/demon/Demon.gif";


    setInterval( () => {
        let x = 0, y = 0;

        _.map(map, function (a, b) {

            _.map(a, function () {
                ctx.drawImage(newImg, x, y, 70, 70);
                x += 70;
            });
            x = 0;
            y += 70
        })

        ctx.drawImage(newImgMonster, hx, hy, 70, 70)

    }, frameRate)

    document.getElementById('textarea').onkeydown = function (e) {
        if (e.keyCode == '13') {
            console.log(document.getElementById('textarea').value)

            ctx.fillText(document.getElementById('textarea').value , hy - 50, hx + 50);
        }
    }

    document.onkeydown = function (e) {
        if (e.keyCode == '38') {
            hy -= 10;
        }
        else if (e.keyCode == '40') {
            hy += 10;
        }
        else if (e.keyCode == '37') {
            hx -= 10;
        }
        else if (e.keyCode == '39') {
            hx += 10;
        }

        console.log(hx, hy)
    }
};

export default DrawMapClass;