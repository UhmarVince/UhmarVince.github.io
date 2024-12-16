
   function determineSupportCombo(){
    const optionSupXX = document.getElementById("options");
    const optionSup100XX = document.getElementById("options100");
    
    const kindX = optionSupXX.options[optionSupXX.selectedIndex];   
    const kinderX = optionSup100XX.options[optionSup100XX.selectedIndex]; 

    if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 0){ //free-free
        console.log("unstable");
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 1){ //free-roller
        console.log("unstable");
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 2){ //free-pin
        console.log("unstable");
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 3){ //free-fixed
        console.log("stable");
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 0){ //roller-free
        console.log("unstable");
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 1){ //roller-roller
        console.log("unstable");
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 2){ //roller-pin
        console.log("unstable");
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 3){ //roller-fixed
        console.log("stable propped");
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 0){ //pin-free
        console.log("unstable");
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 1){ //pin-roller
        console.log("unstable");
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 2){ //pin-pin
        console.log("unstable");
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 3){ //pin-fixed
        console.log("stable propped");
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 0){ //fixed-free
        console.log("stable cantilever");
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 1){ //fixed-roller
        console.log("stable");
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 2){ //fixed-pin
        console.log("stable");
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 3){ //fixed-fixed
        console.log("stable");
    }
}

    const supportive = document.getElementById("options");
    const supportive1 = document.getElementById("options100");
    
    supportive.addEventListener('change',determineSupportCombo);
    supportive1.addEventListener('change',determineSupportCombo); 
