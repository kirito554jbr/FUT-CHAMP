const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {

    
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');




    select.addEventListener('click', () => {

    
        select.classList.toggle('select-clicked');
     
        caret.classList.toggle('caret-rotat');
       
        menu.classList.toggle('menu-open');
    });

    
    options.forEach(option => {
      
        option.addEventListener('click', () => {
            
            selected.innerText = option.innerText;
            
            select.classList.remove('select-clicked');
             
            caret.classList.remove('caret-rotate');
            
            menu.classList.remove('menu-open');
            
            options.forEach(option => {
                option.classList.remove('active');
            });
            
            option.classList.add('active');
            

        });
    }); 
});





const hide = document.getElementById('hide');
const show = document.getElementById('show');
const HideSubB = document.getElementById('hide-sub-b');
const close = document.getElementById('close');
const x = document.getElementById('x');


show.addEventListener('click', () => {
    show.style.display = "none";
    hide.style.display = "block";
    HideSubB.style.display = "none";


});


close.addEventListener('click', () => {
    show.style.display = "block";
    hide.style.display = "none";
    HideSubB.style.display = "block";
});


x.addEventListener('click', () => {
    show.style.display = "block";
    hide.style.display = "none";
    HideSubB.style.display = "block";
});






function ChooseST(){
    
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";
       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "ST") {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchST(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

   

function ChooseST1(){
    
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";
       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "ST") {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchST1(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }



   function ChooseLW(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "LW") {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchLW(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

function ChooseRW(){
 fetch('players.json')
.then(response => response.json())
.then(APT => {

    const Legends = APT.players;
    const LegendPlace = document.getElementById('test');
    
    console.log(Legends[0]);
    LegendPlace.innerHTML = "";

    Legends.forEach(Legend => {
       
                
        if(Legend.position === "RW") {
           
            
        LegendPlace.innerHTML += `
                           <div class = "p-card" onclick = "PlaceInPitchRW(this)">
                           <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                           <p class ="rating-fixer">${Legend.rating}</p>
                            <p class ="name-fixer">${Legend.name}</p>
                            <p class ="position-fixer"> ${Legend.position}</p>
                            <p class ="pace-fixer">PAC ${Legend.pace}</p>
                            <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                            <p class ="passing-fixer">PAS ${Legend.passing}</p>
                            <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                            <p class ="defending-fixer">DEF ${Legend.defending}</p>
                            <p class ="physical-fixer">PHY ${Legend.physical}</p>
                            <img src="${Legend.league}" alt="" class = "icons-fixer">
                            <img src="${Legend.logo}" alt="" class = "icons-fixer">
                            <img src="${Legend.nation}" alt="" class = "icons-fixer">
                            <div>
                        `;
                        
        
                    }
    })

})
}


function ChooseCM(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "CM" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchCM(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

   

function ChooseCM1(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "CM" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchCM1(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }


   function ChooseLB(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "LB" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchLB(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

   
function ChooseRB(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "RB" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchRB(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }


   function ChooseCB1(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "CB" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchCB1(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

   function ChooseCB(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "CB" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick = "PlaceInPitchCB(this)">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">PAC ${Legend.pace}</p>
                               <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
                               <p class ="passing-fixer">PAS ${Legend.passing}</p>
                               <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
                               <p class ="defending-fixer">DEF ${Legend.defending}</p>
                               <p class ="physical-fixer">PHY ${Legend.physical}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }

   
function ChooseGK(){
    fetch('players.json')
   .then(response => response.json())
   .then(APT => {
   
       const Legends = APT.players;
       const LegendPlace = document.getElementById('test');
       
    //    console.log(Legends[0]);
              LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "GK" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card" onclick="PlaceInPitchGK(this)" style ="z-index: 999;">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}">
                              <p class ="rating-fixer">${Legend.rating}</p>
                               <p class ="name-fixer">${Legend.name}</p>
                               <p class ="position-fixer"> ${Legend.position}</p>
                               <p class ="pace-fixer">DIV ${Legend.diving}</p>
                               <p class ="shooting-fixer">HAN ${Legend.handling}</p>
                               <p class ="passing-fixer">KIC ${Legend.kicking}</p>
                               <p class ="dribbling-fixer">REF ${Legend.reflexes}</p>
                               <p class ="defending-fixer">SPD ${Legend.speed}</p>
                               <p class ="physical-fixer">POS ${Legend.positioning}</p>
                               <img src="${Legend.league}" alt="" class = "icons-fixer">
                               <img src="${Legend.logo}" alt="" class = "icons-fixer">
                               <img src="${Legend.nation}" alt="" class = "icons-fixer">
                               <div>
                           `;
                           
           
                       }
       })
   
   })
   }




   



   function PlaceInPitchGK(Player) {
    const GKPosition = document.getElementById('GK');
    if (GKPosition.children.length > 0) {
        GKPosition.innerHTML = ''; 
    }
    GKPosition.classList.remove('player-card');
    GKPosition.appendChild(Player);
}



function PlaceInPitchCB(Player) {
    const CBPosition = document.getElementById('CB');
    if (CBPosition.children.length > 0) {
        CBPosition.innerHTML = ''; 
    }
    CBPosition.classList.remove('player-card');
    CBPosition.appendChild(Player);
}



function PlaceInPitchCB1(Player) {
    const CB1Position = document.getElementById('CB1');
    if (CB1Position.children.length > 0) {
        CB1Position.innerHTML = ''; 
    }
    CB1Position.classList.remove('player-card');
    CB1Position.appendChild(Player);
}



function PlaceInPitchRB(Player) {
    const RBLPosition = document.getElementById('RB');
    if (RBLPosition.children.length > 0) {
        RBLPosition.innerHTML = ''; 
    }
    RBLPosition.classList.remove('player-card');
    RBLPosition.appendChild(Player);
}


function PlaceInPitchLB(Player) {
    const LBLPosition = document.getElementById('LB');
    if (LBLPosition.children.length > 0) {
        LBLPosition.innerHTML = ''; 
    }
    LBLPosition.classList.remove('player-card');
    LBLPosition.appendChild(Player);
}
  

function PlaceInPitchCM(Player) {
    const CMPosition = document.getElementById('CM');
    if (CMPosition.children.length > 0) {
        CMPosition.innerHTML = ''; 
    }
    CMPosition.classList.remove('player-card');
    CMPosition.appendChild(Player);
}
  

function PlaceInPitchCM1(Player) {
    const CM1Position = document.getElementById('CM1');
    if (CM1Position.children.length > 0) {
        CM1Position.innerHTML = ''; 
    }
    CM1Position.classList.remove('player-card');
    CM1Position.appendChild(Player);
}
  



function PlaceInPitchRW(Player) {
    const RWLPosition = document.getElementById('RW');
    if (RWLPosition.children.length > 0) {
        RWLPosition.innerHTML = ''; 
    }
    RWLPosition.classList.remove('player-card');
    RWLPosition.appendChild(Player);
}


  
function PlaceInPitchLW(Player) {
    const LWLPosition = document.getElementById('LW');
    if (LWLPosition.children.length > 0) {
        LWLPosition.innerHTML = ''; 
    }
    LWLPosition.classList.remove('player-card');
    LWLPosition.appendChild(Player);
}




    
function PlaceInPitchST(Player) {
    const STLPosition = document.getElementById('ST');
    if (STLPosition.children.length > 0) {
        STLPosition.innerHTML = ''; 
    }
    STLPosition.classList.remove('player-card');
    STLPosition.appendChild(Player);
}


    
function PlaceInPitchST1(Player) {
    const ST1Position = document.getElementById('ST1');
    if (ST1Position.children.length > 0) {
        ST1Position.innerHTML = ''; 
    }
    ST1Position.classList.remove('player-card');
    ST1Position.appendChild(Player);
}






//     document.getElementById('4-3-3').style.display = "none";

//     function FormSwitch(){
//     if(document.getElementById('4-3-3').style.display === "none"){
//         document.getElementById('4-3-3').style.display = "block";
//         document.getElementById('4-4-2').style.display = "none";
//     }
//     else{
//         document.getElementById('4-3-3').style.display = "none";
//         document.getElementById('4-4-2').style.display = "block";
//     }
// }



let AddPlayer = document.getElementById('add-player');

AddPlayer.addEventListener('click', function(e) {


    const PlayerName = document.getElementById('player-name').value;
    const PlayerImage = document.getElementById('player-image').value
    const PlayerNation = document.getElementById('player-nation').value
    const ClubLogo = document.getElementById('club-logo').value;
    const PlayerLeague = document.getElementById('player-league').value
    const PlayerPosition = document.getElementById('player-position').value;
    const PlayerOvr = document.getElementById('player-over').value;
    const PlayerPac = document.getElementById('player-pac').value;
    const PlayerSho= document.getElementById('player-sho').value;
    const PlayerPas = document.getElementById('player-pas').value;
    const PlayerDri = document.getElementById('player-dri').value;
    const PlayerDef = document.getElementById('player-def').value;
    const PlayerPhy = document.getElementById('player-phy').value;
   

   
    // const  = document.getElementById('').value;
    // const  = document.getElementById('').value;
    
const PlayerAddedInModale = document.getElementById('test');




PlayerAddedInModale.insertAdjacentHTML('beforeend',  `                              
                              <div class = "p-card" onclick="PlaceInPitchCB(this)" style ="z-index: 999;">
                              <img src="${PlayerImage}" class ="image-fixer" alt="${PlayerName}">
                              <p class ="rating-fixer">${PlayerOvr}</p>
                               <p class ="name-fixer">${PlayerName}</p>
                               <p class ="position-fixer"> ${PlayerPosition}</p>
                               <p class ="pace-fixer">PAC ${PlayerPac}</p>
                               <p class ="shooting-fixer">SHO ${PlayerSho}</p>
                               <p class ="passing-fixer">PAS ${PlayerPas}</p>
                               <p class ="dribbling-fixer">DRI ${PlayerDri}</p>
                               <p class ="defending-fixer">DEF ${PlayerDef}</p>
                               <p class ="physical-fixer">PHY ${PlayerPhy}</p>
                               <img src="${PlayerLeague}" alt="" class = "icons-fixer">
                               <img src="${ClubLogo}" alt="" class = "icons-fixer">
                               <img src="${PlayerNation}" alt="" class = "icons-fixer">
                               <div>
    `
);
    console.log(PlayerAddedInModale.innerHTML);








document.getElementById('player-name').value;
document.getElementById('player-position').value;
document.getElementById('player-over').value;
document.getElementById('player-pac').value;
document.getElementById('player-sho').value;
document.getElementById('player-pas').value;
document.getElementById('player-dri').value;
document.getElementById('player-def').value;
document.getElementById('player-phy').value;

});








