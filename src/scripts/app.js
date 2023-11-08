'use strict'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, PixiPlugin,Draggable);


var previousRotation = 0;
const spans = document.querySelectorAll('ul#dial li span');
Draggable.create('#dial', {
  type:'rotation',
  throwProps: true,
  onDrag: function() {
    var yourDraggable = Draggable.get('#dial');
    
    
    var direction = (yourDraggable.rotation - previousRotation) > 0 ? "clockwise" : "counter-clockwise";
    console.log("Direction: " + direction + ", angle: " + yourDraggable.rotation);
    
    var snapAngle = 60; // Angle de snap (en degrés)
    var snappedRotation = Math.round(yourDraggable.rotation / snapAngle) * snapAngle;
    
    gsap.to(yourDraggable.target, 0.3, { rotation: snappedRotation, overwrite: true });
    
    previousRotation = snappedRotation;

    // Détection de chevauchement
   
    const div = document.querySelector('#clicker');
    const mot = document.querySelector('.mot');
    const contenus = document.querySelector('.contenu');
    
    ///

    spans.forEach(span => {
      const spanRect = span.getBoundingClientRect();
      const divRect = div.getBoundingClientRect();

      if (
        spanRect.top < divRect.bottom &&
        spanRect.bottom > divRect.top &&
        spanRect.left < divRect.right &&
        spanRect.right > divRect.left
      ) {
        span.classList.toggle('mot');
        mot.addEventListener('click', () => {
        
          gsap.to(span,{y:-1000, duration:0.8, delay:0.4}); 
          gsap.to(".page_Accueil",{display:"none",opacity:0,duration:2,delay:1.5});
          gsap.to(".long",{x:-1500,duration:2, delay:0.48,
            onComplete: function() {
              
              contenus.classList.remove('contenu');
  
            }
          });
          
        });
      } 
     //else {
    //     span.classList.remove('mot');
      //}
    });

  }
});




var jsonData = {
    "options": [
        {
            "name": "DWT",

            "image": [

                "../assets/images/vfx1.png",
                "../assets/images/vfx2.png",
                "../assets/images/vfx3.png",
                "../assets/images/vfx4.png"

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

// var selectedSpan  = document.querySelector(".mot");
// console.log(selectedSpan);
var imageContainer = document.getElementById("imageContainer");

// Écoutez les changements de sélection de l'option
spans.forEach(span => {
    span.addEventListener("click", function() {
           // Obtenez la valeur de l'option sélectionnée
      var selectedOption = span.getAttribute("value");
      console.log(selectedOption);
    // Effacez le contenu précédent
    imageContainer.innerHTML = "";
    
 

    // Recherchez l'option sélectionnée dans le tableau JSON
    var selectedData = jsonData.options.find(option => option.name === selectedOption);
    console.log(selectedData);
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
});


// Déclenchez l'événement change pour afficher les images initiales
//selectElement.dispatchEvent(new Event("change"));