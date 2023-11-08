'use strict'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin);



var jsonData = {
    "options": [
        {
            "name": "DWT",

            "image": [

            ]
        },
        {
            "name": "3D",
            "image": [
                "../assets/images/vfx1.png",
                "../assets/images/vfx2.png",
                "../assets/images/vfx3.png",
                "../assets/images/vfx4.png",
                "../assets/images/vfx5.png",
                "../assets/images/vfx6.png",
                "../assets/images/vfx7.png",
                "../assets/images/vfx8.png",
                "../assets/images/vfx9.png",
                "../assets/images/vfx10.png",
                "../assets/images/Anim3d1.png",
                "../assets/images/Anim3d2.png",
                "../assets/images/Anim3d3.png",
                "../assets/images/Anim3d4.png",
                "../assets/images/Anim3d5.png",
                "../assets/images/Anim3d6.png",
                "../assets/images/Anim3d7.png",
                "../assets/images/Anim3d8.png",
                "../assets/images/Anim3d9.png",
                "../assets/images/Anim3d10.png",
                "../assets/images/Anim3d11.png"
            ]
        },
        {
            "name": "CG",
            "image": [

            ]
        },
        {
            "name": "IR",
            "image": [

            ]
        },
        {
            "name": "JV",
            "image": [

            ]
        },
        {
            "name": "Anim2d",
            "image": [
                "../assets/images/Anim2d.png",
                "../assets/images/Anim2d1.png",
                "../assets/images/Anim2d2.png",
                "../assets/images/Anim2d3.png",
                "../assets/images/Anim2d4.png",
                "../assets/images/Anim2d5.png",

            ]
        }
    ]
};

var selectElement = document.getElementById("selectOption");
var imageContainer = document.getElementById("imageContainer");

// Écoutez les changements de sélection de l'option
selectElement.addEventListener("change", function () {
    // Effacez le contenu précédent
    imageContainer.innerHTML = "";

    // Obtenez la valeur de l'option sélectionnée
    var selectedOption = selectElement.value;

    // Recherchez l'option sélectionnée dans le tableau JSON
    var selectedData = jsonData.options.find(option => option.name === selectedOption);
    var datalenght = selectedData.image;
    if (selectedData) {
        // Utilisez une boucle pour afficher les images correspondantes
        for (let i = 0; i < datalenght.length; i++) {
            var imageSrc = datalenght[i];
            var div = document.createElement("div");
            div.classList.add('grid__el');
            div.classList.add('grid__el' + i);
            var lien = document.createElement("a");
            lien.href = "projet.html";
            var img = document.createElement("img");
            img.src = imageSrc;
            lien.appendChild(img);
            div.appendChild(lien);
            imageContainer.appendChild(div);
        }
    }
});


// Déclenchez l'événement change pour afficher les images initiales
selectElement.dispatchEvent(new Event("change"));