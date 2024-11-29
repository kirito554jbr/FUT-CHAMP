const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdowns element
dropdowns.forEach(dropdown => {

    //Get inner element from each dropdown
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

show.addEventListener('click', () => {
    show.style.display = "none";
    hide.style.display = "block";
    HideSubB.style.display = "none";


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
                              <div class = "p-card" onclick = "PlaceInPitchGK(this)" style ="z-index: 999;">
                              <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
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




   





   function PlaceInPitchGK(Player){
    
    
    document.getElementById('GK').appendChild(Player);

    
  console.log(Player);
  
  
  }


function PlaceInPitchCB(Player){

    
    document.getElementById('CB').appendChild(Player);
  console.log(Player);
  
  
  }
  
function PlaceInPitchRB(Player){

    
    document.getElementById('RB').appendChild(Player);
  console.log(Player);
  
  
  }

  
function PlaceInPitchLB(Player){

    
    document.getElementById('LB').appendChild(Player);
  console.log(Player);
  
  
  }

  
function PlaceInPitchCM(Player){

    
    document.getElementById('CM').appendChild(Player);
  console.log(Player);
  
  
  }

  
function PlaceInPitchRW(Player){

    
    document.getElementById('RW').appendChild(Player);
  console.log(Player);
  
  
  }

  
function PlaceInPitchLW(Player){

    
    document.getElementById('LW').appendChild(Player);
  console.log(Player);
  
  
  }

  
function PlaceInPitchST(Player){
    
    
    document.getElementById('ST').appendChild(Player);

    
  console.log(Player);
  
  
  }






    document.getElementById('4-3-3').style.display = "none";

    function FormSwitch(){
    if(document.getElementById('4-3-3').style.display === "none"){
        document.getElementById('4-3-3').style.display = "block";
        document.getElementById('4-4-2').style.display = "none";
    }
    else{
        document.getElementById('4-3-3').style.display = "none";
        document.getElementById('4-4-2').style.display = "block";
    }
}

// const AddedPlayers = {
//     Player : {
//         name : "Zlatan Ibrahimofich",
//         photo : "",
//         position : "ST",
//         nationality : "Swedish",
//         flag : "",
//         club : "Ac Milan",
//         logo : "",
//         rating : "87",
//         pace : "82",
//         shooting : "95",
//         passing : "83",
//         dribbling : "84",
//         defending : "45",
//         physical : "86"

//     }
    
// }