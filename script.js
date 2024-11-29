const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdowns element
dropdowns.forEach(dropdown => {

    //Get inner element from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

/* 
We are using this method in order to have
multiple dropdown menus on the page work 
*/



    //Add a click event to the select element
    select.addEventListener('click', () => {

        //Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotat');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //Loop through all option elements
    options.forEach(option => {
        //Add a click event to the option inner text
        option.addEventListener('click', () => {
            //change selected inner text to cliked option inner text
            selected.innerText = option.innerText;
            //Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element 
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //Remove active class from all option element
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');

        });
    }); 
});




// const choose = querySelector('.choose');


// choose.addEventListener('click' => {


// }




const hide = document.getElementById('hide');
const show = document.getElementById('show');
const HideSubB = document.getElementById('hide-sub-b');

show.addEventListener('click', () => {
    show.style.display = "none";
    hide.style.display = "block";
    HideSubB.style.display = "none";


});



// fetch('players.json')
// .then(response => response.json())
// .then(APT => {

//     const Legends = APT.players;
//     const LegendPlace = document.getElementById('test');
    
//     console.log(Legends[0]);
    
//     Legends.forEach(Legend => {
        
        
           
            
//         LegendPlace.innerHTML += `
//                            <div class = "p-card">
//                            <img src="${Legend.photo}" class ="image-fixer" alt="${Legend.name}" >
//                             <p class ="name-fixer">${Legend.name}</p>
//                             <p class ="position-fixer"> ${Legend.position}</p>
//                             <p class ="pace-fixer">PAC ${Legend.pace}</p>
//                             <p class ="shooting-fixer">SHO ${Legend.shooting}</p>
//                             <p class ="passing-fixer">PAS ${Legend.passing}</p>
//                             <p class ="dribbling-fixer">DRI ${Legend.dribbling}</p>
//                             <p class ="defending-fixer">DEF ${Legend.defending}</p>
//                             <p class ="physical-fixer">PHY ${Legend.physical}</p>
//                             <img src="${Legend.league}" alt="" class = "icons-fixer">
//                             <img src="${Legend.logo}" alt="" class = "icons-fixer">
//                             <img src="${Legend.nation}" alt="" class = "icons-fixer">
//                             <div>
//                         `;
                        
        
        
//     });

// })


function ChooseST(){
    // Element.remove = 'p-card';
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
                              <div class = "p-card">
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
                              <div class = "p-card">
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
    // function CheckPosition(Json, position) {
    //     return Json.filter((el) => el.position === position);
    //   }
    
//  let Json = 
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
                           <div class = "p-card">
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
                              <div class = "p-card">
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
                              <div class = "p-card">
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
                              <div class = "p-card">
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
                              <div class = "p-card">
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
       
       console.log(Legends[0]);
       LegendPlace.innerHTML = "";

       Legends.forEach(Legend => {
          
                   
           if(Legend.position === "GK" ) {
              
               
           LegendPlace.innerHTML += `
                              <div class = "p-card">
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