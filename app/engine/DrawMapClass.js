import map from '../maps/map.json'
import textures from '../textures/textures'

let DrawMapClass = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let newImg = new Image();
    newImg.src = "./app/textures/grounds/grass/grass1_0.png";


    setInterval( () => {
        let x = 0, y = 0;

        _.map(map, function (a, b) {
            console.log(x, y)

            _.map(a, function () {
                ctx.drawImage(newImg, x, y, 70, 70);
                x += 70;
            });
            x = 0;
            y += 70
        })
    }, 200)
};

export default DrawMapClass;