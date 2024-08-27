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
    

    const icons = document.querySelectorAll('.icon-group img');

spans.forEach(span => {
  const spanRect = span.getBoundingClientRect();
  const divRect = div.getBoundingClientRect();

  // Détection de chevauchement
  if (
      spanRect.top < divRect.bottom &&
      spanRect.bottom > divRect.top &&
      spanRect.left < divRect.right &&
      spanRect.right > divRect.left
  ) {
      // Supprimer la classe 'mot' de tous les autres spans
      spans.forEach(s => s.classList.remove('mot'));

      // Ajouter la classe 'mot' uniquement au span chevauchant
      span.classList.add('mot');

      // Identifier l'icône correspondante et supprimer la classe 'icon-group__block'
      icons.forEach(icon => {
          if (icon.getAttribute('value') === span.getAttribute('value')) {
              icon.classList.remove('icon-group__block');
            //   gsap.to(".icon-group__block", {  opacity: 0, duration: 1 });
          }
      });

      // Ajouter l'événement 'click' sur le span actuel
      span.addEventListener('click', () => {
          gsap.to(span, { y: -1000, duration: 2, delay: 0.4 });
          gsap.to(".icon-group", { x: -1000, duration: 2, delay: 0.4 });
          gsap.to(".page_Accueil", { display: "none", opacity: 0, duration: 2, delay: 1.5 });
          gsap.to(".long", {
              x: -1500,
              duration: 2,
              delay: 0.48,
              onComplete: function () {
                  contenus.classList.remove('contenu');
              }
          });
      });
  } else {
      // Réappliquer la classe 'icon-group__block' si le span ne chevauche pas
      icons.forEach(icon => {
          if (icon.getAttribute('value') === span.getAttribute('value')) {
              icon.classList.add('icon-group__block');
            //   gsap.to(".icon-group__block", {  opacity: 1, duration: 1 });
          }
      });
  }
});


  }
});

var jsonData = {
    "options": [
        {
            "name": "DWT",
            "images": [
                {
                    "src": "../assets/images/dwt-1.png",
                    "text": "Musicollab propose à ses utilisateurs de créer une session avec les membres de leur groupe. Ils pourront ainsi partager librement leurs différents enregistrements lors d'essais du jour ou de l'enregistrement d'une répétition, même une idée passagère à la guitare.",
                    "lien":"https://jonathan-lemineur.be/projets/tfe/"
                },
                {
                    "src": "../assets/images/dwt2.png",
                    "text": "The Uninvited est une expérience visuelle, ludique et interactive.",
                    "lien":"https://florence-lambert.be/projets/dataplay/"
                },
                {
                    "src": "../assets/images/dwt4.png",
                    "text": "Jeu de stratégie au tour par tour basé sur les livres Winnie l'ourson",
                    "lien":"https://bastien-gathoye.be/projets/tfe/"
                },
                {
                    "src": "../assets/images/dwt5.png",
                    "text": "It's a research and reflection project on the mental health of students through which I had the opportunity to meet users and envision potential solutions to their problems and needs.",
                    "lien":"https://www.florence-lambert.be/projets/TFA/"
                },
                {
                    "src": "../assets/images/dwt6bis.png",
                    "text": "BookHive ditches algorithms and allows users to get tailored book suggestions from fellow bookworms and friends. Whether",
                    "lien":"https://sandrinewij.be/projets/tfa/"
                },
                {
                    "src": "../assets/images/dwt8bis.png",
                    "text": "Avec Tattoo Explore viens découvrir les tatouages du monde",
                    "lien":"https://antoni-dumont.be/projets/tfe/"
                },
                {
                    "src": "../assets/images/dwt9.png",
                    "text": "Echoes of Nemesis est la démo d’un jeu conçu pour être un Visual Novel accessible sur le web.",
                    "lien": "https://lindsay-colard.be/projets/tfe/"
                },
                {
                    "src": "../assets/images/dwt10.png",
                    "text": "NOCLIP INSIDE THE BACKROOMS est un site web immersif dans lequel vous découvrirez les secrets du mystérieux et terrifiant univers des Backrooms.",
                    "lien":"https://rafko.be/projets/tfe/"
                    

                },
                {
                    "src": "../assets/images/dwt11.png",
                    "text": "Découvrez tous les événements estudiantins de Namur. ",
                    "lien":"https://audrey-poelaert.be/projets/tfe/"
                },

            ]
        },
        {
            "name": "3D",
            "images": [
                {
                    "src": "../assets/images/vfx1.png",
                    "text": "Projet de fin d'étude d'Elizaveta Alexandre-Soboleva . Le projet Dawn of Time est né de la volonté de raconter une histoire centrée sur la notion de temps.",
                    "lien":"https://www.artstation.com/artwork/g26xRm"
                },
                // {
                //     "src": "../assets/images/vfx2.png",
                //     "text": "Description pour VFX2",
                //     "lien":""
                // },
                {
                    "src": "../assets/images/vfx3.png",
                    "text": "Mako vfx project",
                    "lien":"https://www.youtube.com/watch?v=fT21l7t-D_Y"
                },
                {
                    "src": "../assets/images/vfx4.png",
                    "text": "Pandora vfx project",
                    "lien":"https://www.youtube.com/watch?v=Hsne_bhsjDc"
                },
                {
                    "src": "../assets/images/vfx5.png",
                    "text": "Post Memoriam vfx project",
                    "lien":"https://www.youtube.com/watch?v=j8AZqrREnnI"
                },
                {
                    "src": "../assets/images/vfx6.png",
                    "text": "Rise vfx project",
                    "lien":"https://www.youtube.com/watch?v=hRVyZPNjU7I"
                },
                {
                    "src": "../assets/images/vfx7.png",
                    "text": "Aluma vfx project",
                    "lien":"https://www.youtube.com/watch?v=bLw35pNNeQQ"
                },
                {
                    "src": "../assets/images/vfx8.png",
                    "text": "Description pour David vs Goliath",
                    "lien":"https://www.youtube.com/watch?v=uO7cuCWY35E"
                },
                {
                    "src": "../assets/images/vfx9.png",
                    "text": "ID2 vfx project",
                    "lien":"https://www.youtube.com/watch?v=GVXCHoN3KIc"
                },
                {
                    "src": "../assets/images/vfx10.png",
                    "text": "Runestone vfx project",
                    "lien":"https://www.youtube.com/watch?v=IBRnOsqDet4"
                },
                {
                    "src": "../assets/images/Anim3d1.png",
                    "text": "Compagnon volatile",
                    "lien":"https://www.youtube.com/watch?v=DhfHQdTKDuQ"
                },
                {
                    "src": "../assets/images/Anim3d2.png",
                    "text": "Eye in the woods",
                    "lien":"https://www.youtube.com/watch?v=m3squC9w3n4"
                },
                {
                    "src": "../assets/images/Anim3d3.png",
                    "text": "Fallen memories",
                    "lien":"https://www.youtube.com/watch?v=HTZiFez3X1Y"
                },
                // {
                //     "src": "../assets/images/Anim3d4.png",
                //     "text": "Description pour Anim3D4",
                //     "lien":""
                // },
                {
                    "src": "../assets/images/Anim3d5.png",
                    "text": "Monster do not exist",
                    "lien":"https://www.youtube.com/watch?v=SPIiqdRwz3w"
                },
                {
                    "src": "../assets/images/Anim3d6.png",
                    "text": "Brave",
                    "lien":"https://www.youtube.com/watch?v=iGXliCt0osE"
                },
                {
                    "src": "../assets/images/Anim3d7.png",
                    "text": "Désordre",
                    "lien":""
                },
                {
                    "src": "../assets/images/Anim3d8.png",
                    "text": "Mom best day",
                    "lien":"https://www.youtube.com/watch?v=uIExkXKEsPE"
                },
                // {
                //     "src": "../assets/images/Anim3d9.png",
                //     "text": "Soulmate",
                //     "lien":""
                // },
                // {
                //     "src": "../assets/images/Anim3d10.png",
                //     "text": "The tale of yuki",
                //     "lien":""
                // },
                // {
                //     "src": "../assets/images/Anim3d11.png",
                //     "text": "Description pour Anim3D11",
                //     "lien":""
                // }
            ]
        },
        {
            "name": "CG",
            "text": "Le sujet de TFE étant la réalisation d'un magazine voici un avant gout",
            "images": [
                {
                    "src": "../assets/images/com1.png",
                    "text": "TFE fait par Thomas Stassen",
                    "lien":"https://heaj-comgraphpub.com/TFE-Thomas-Stassen"
                    
                },
                {
                    "src": "../assets/images/com2.png",
                    "text": "Description pour le TFE fait par Laura Li Zhang Chaoyue",
                    "lien":"https://heaj-comgraphpub.com/TFE-Laura-LI_ZHANGCHAOYUE"
                },
                {
                    "src": "../assets/images/com3.png",
                    "text": "Description pour le TFE fait par Fabian De Smet",
                    "lien":"https://heaj-comgraphpub.com/TFE-Fabian-De-Smet"
                },
                {
                    "src": "../assets/images/com4.png",
                    "text": "Description pour le travail fait par Tess Jaupart",
                    "lien":"https://heaj-comgraphpub.com/TFE-Tess-Jaupart"
                },
                {
                    "src": "../assets/images/com5.png",
                    "text": "Description pour le TFE fait par Bryan Bernard",
                    "lien":"https://heaj-comgraphpub.com/TFE-Bryan-Bernard"
                },
                {
                    "src": "../assets/images/com6.png",
                    "text": "Description pourle TFE fait par Cyril Verbois",
                    "lien":"https://heaj-comgraphpub.com/TFE-Cyril-Verbois"
                },
            ]
        },
        {
            "name": "IR",
            "images": []
        },
        {
            "name": "JV",
            "images": [
                {
                    "src":"../assets/images/jv1.png",
                    "text":"Voici Recall un projet de groupe",
                    "lien": "https://www.artstation.com/artwork/1xd1Qo"
                },
                {
                    "src":"../assets/images/jv2.png",
                    "text":"Voici Medical lab c'est la remasterisation d'un environnement de Mass Effect 2.",
                    "lien": "https://www.artstation.com/artwork/5vAeog"
                },
                {
                    "src":"../assets/images/jv3.png",
                    "text":"Voici un projet de fin d'étude réalisé par Siméon Demoiseau",
                    "lien": "https://www.artstation.com/artwork/qeamNy"
                },
                {
                    "src":"../assets/images/jv4.png",
                    "text":"Voici un projet de fin d'étude réalisé par Louis Jennes",
                    "lien": "https://www.artstation.com/artwork/YBAv5d"
                },
                {
                    "src":"../assets/images/jv5.png",
                    "text":"Voici un projet par réalisé par Florent Lhost",
                    "lien": "https://www.artstation.com/artwork/LRBmQr"
                },
                {
                    "src":"../assets/images/jv6.png",
                    "text":"Voici un projet de fin d'étude réalisé par Florent Turrioni",
                    "lien": "https://www.artstation.com/artwork/QXbRZ4"
                },
            ]
        },
        {
            "name": "Anim2d",
            "images": [
                {
                    "src": "../assets/images/Anim2d.png",
                    "text": "Description pour Anim2D",
                    "lien":""
                },
                {
                    "src": "../assets/images/Anim2d1.png",
                    "text": "Description pour Anim2D1",
                    "lien":""
                },
                {
                    "src": "../assets/images/Anim2d2.png",
                    "text": "Description pour Anim2D2",
                    "lien":""
                },
                {
                    "src": "../assets/images/Anim2d3.png",
                    "text": "Kuro le samourai noir",
                    "lien":"https://vimeo.com/563678562?turnstile=0.K5tmRnqZu-_v_8TrEHX9zo2SppAF4_1yjaLmOfJ9QKUaZq34fE4HONE2dHdVHxsldwusjqMFodmhsVMymxp-zm5MrZPpviH7bR18NtS3P-6dO5_2VnvBbYc7ylkU-6v2_ou-W5Y23bM3pNnuRdX4eD3VC9RphlZ49WSrYecycWRya1viDFHRE5xJsd8JLgjl7fvewuv9E1DDUsS0O09Kxhku0FykVon_XA9pEDkyalTbeZ2rws6_Fq_0mVU6n5sgwS2MLGJMqG7OWpUO2XVDQkFb6gPXKAW-4VTulDhNifMNe7ciWAWRlSh5tMEenBhVhXAtS92IZgWVe1sw0_YCST9BdIIaIWD6cnkHB6pHtzor4AhUU2MpLYbLagG4FUcWwpnrnSPca595ScL1m_tG-584jLxKAlCXwaZv_amB8auIHdmuWHrU-gtbnttc1h2iG0hpI0PwZKqNob8FYsckfQ.McFkcvYXNRRti6w6AsW0ag.de824c4f9f0410fcb633debacda6600a3c23cb4492115cd5b3cc198ed864c903"
                },
                // {
                //     "src": "../assets/images/Anim2d4.png",
                //     "text": "Description pour Anim2D4",
                //     "lien":""
                // },
                // {
                //     "src": "../assets/images/Anim2d5.png",
                //     "text": "Description pour Anim2D5",
                //     "lien":""
                // }
            ]
        }
    ]


};

// var selectedSpan  = document.querySelector(".mot");
// console.log(selectedSpan);
var previousContent = ''; // Variable pour stocker le contenu précédent

// Lorsque la page se charge, vérifiez si un pop-up doit être rouvert
// document.addEventListener("DOMContentLoaded", function() {
    var lastOpenedPopup = localStorage.getItem("lastOpenedPopup");

    if (lastOpenedPopup) {
        // Simuler un clic sur le span correspondant pour rouvrir le pop-up
        var targetSpan = document.querySelector(`span[value='${lastOpenedPopup}']`);
        if (targetSpan) {
            targetSpan.click();  // Ouvrir le pop-up
        }
        
        // Supprimer l'information du pop-up ouvert après avoir rouvert
        localStorage.removeItem("lastOpenedPopup");
    }
// });

var imageContainer = document.getElementById("imageContainer");
var gridContainer = document.querySelector(".grid"); // Sélectionnez votre conteneur de grille
  // Créez le bouton de fermeture une seule fois
  var closeButton = document.createElement("img");
  closeButton.src = "../assets/images/close_rond.svg"; // Assurez-vous que l'image existe à cet emplacement
  closeButton.classList.add("button--close");
   // Ajoutez le bouton de fermeture à imageContainer
   imageContainer.appendChild(closeButton);

   // Ajoutez un gestionnaire d'événements pour fermer le pop-up
   closeButton.addEventListener("click", function() {
    //    imageContainer.innerHTML = '';  // Efface le contenu de imageContainer pour fermer le pop-up
    location.reload(); // Recharge la page
   });

    spans.forEach(span => {
        span.addEventListener("click", function() {
            var selectedOption = span.getAttribute("value");
            var selectedData = jsonData.options.find(option => option.name === selectedOption);

            if (selectedData.images.length === 0) {
                // Si le tableau d'images est vide, afficher un message
                var message = document.createElement("p");
                message.classList.add("message__text");
                message.textContent = "Aucune travaux n'est disponible pour cette option.";
                imageContainer.appendChild(message);

                // Modifier gridContainer pour qu'il soit en display: flex
                gridContainer.style.display = 'flex';
                gridContainer.style.justifyContent = 'center'; // Centrer le message horizontalement
                gridContainer.style.alignItems = 'center';     // Centrer le message verticalement
                gridContainer.style.height = '50vh'; 
            } else {
                // Sinon, afficher les images
                selectedData.images.forEach((imageObj, i) => {
                    var div = document.createElement("div");
                    div.classList.add('grid__el', 'grid__el' + i);

                    var lien = document.createElement("a");
                    lien.href = "#"; // On ne change plus de page

                    var img = document.createElement("img");
                    img.src = imageObj.src;

                    lien.appendChild(img);
                    div.appendChild(lien);
                    imageContainer.appendChild(div);

                    // Ajout de l'événement de clic pour changer l'affichage
                    lien.addEventListener("click", function(e) {
                        e.preventDefault(); // Empêche la navigation par défaut
                        afficherDA(imageObj.src, imageObj.text, imageObj.lien);
                    });
                });
            }


            // Ré-ajoutez la croix de fermeture après avoir rempli les images
            imageContainer.appendChild(closeButton);
        });
    });

    let previousPopState = null; // Variable pour stocker l'état précédent

    function afficherDA(imageSrc, text, lien) {
        // Stocker l'état précédent du pop-up
        previousPopState = {
            imageSrc: imageSrc,
            text: text,
            images: jsonData.options.find(option => option.images.some(img => img.src === imageSrc)).images
        };
    
        imageContainer.innerHTML = ''; // Effacer le contenu du pop-up
        gridContainer.classList.add('inactive');
    
        // Créer une nouvelle section avec un design différent
        var daContainer = document.createElement("div");
        daContainer.classList.add('da-container');

        var img = document.createElement("img");
        img.src = imageSrc;
        img.classList.add('da-image');

        // Créer la div da-text-container qui contiendra le texte
        var textContainer = document.createElement("div");
        textContainer.classList.add('da-text-container');

        var p = document.createElement("p");
        p.innerText = text;
        p.classList.add('da-text');

        // Ajouter le <p> dans la div da-text-container
        textContainer.appendChild(p);

        // Ajouter l'image et la div texte dans le conteneur principal
        daContainer.appendChild(img);
        daContainer.appendChild(textContainer);
    
        // Ajouter le bouton de visite
        if (lien) {
            var siteButton = document.createElement("button");
            siteButton.classList.add("da-site-button");
            siteButton.innerText = 'Viens me découvrir !';
    
            // Ajoutez un gestionnaire d'événements pour ouvrir le lien
            siteButton.addEventListener("click", function() {
                window.open(lien, '_blank'); // Ouvre le lien dans un nouvel onglet
            });
    
            daContainer.appendChild(siteButton);
        }
    
        // Ajoutez le bouton de retour
        var backButton = document.createElement("img");
        backButton.src = "../assets/images/back.svg"; 
        backButton.classList.add('button--back');
    
        // Gestionnaire d'événements pour revenir au pop-up précédent
        backButton.addEventListener("click", function() {
            if (previousPopState) {
                imageContainer.innerHTML = ''; // Effacez le contenu DA
                gridContainer.classList.remove('inactive');
    
                previousPopState.images.forEach((imageObj, i) => {
                    var div = document.createElement("div");
                    div.classList.add('grid__el', 'grid__el' + i);
    
                    var lien = document.createElement("a");
                    lien.href = "#";
    
                    var img = document.createElement("img");
                    img.src = imageObj.src;
    
                    lien.appendChild(img);
                    div.appendChild(lien);
                    imageContainer.appendChild(div);
    
                    lien.addEventListener("click", function(e) {
                        e.preventDefault();
                        afficherDA(imageObj.src, imageObj.text, imageObj.lien);
                    });
                });
    
                imageContainer.appendChild(closeButton); // Réajouter le bouton de fermeture
            }
        });
    
        daContainer.appendChild(backButton);
        imageContainer.appendChild(daContainer);
    }
    

// Déclenchez l'événement change pour afficher les images initiales
//selectElement.dispatchEvent(new Event("change"));