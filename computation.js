
function determineSupportCombo(){
    //----------------------------------------------------------------------------------------------
    const optionSupXX = document.getElementById("options");
    const optionSup100XX = document.getElementById("options100");
    
    const kindX = optionSupXX.options[optionSupXX.selectedIndex];   
    const kinderX = optionSup100XX.options[optionSup100XX.selectedIndex]; 

    let lengthBeam = document.getElementById('beamLength');
    let loadBeam = document.getElementById('beamLoad');

    let shearValues;

    if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 0){ //free-free
        document.getElementById("tdDiag").style.backgroundColor = "blue";
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 1){ //free-roller
        document.getElementById("tdDiag").style.backgroundColor = "red";
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 2){ //free-pin
        document.getElementById("tdDiag").style.backgroundColor = "yellow";
    }else if(parseInt(kindX.value) === 0 && parseInt(kinderX.value) === 3){ //free-fixed
        document.getElementById("tdDiag").style.backgroundColor = "cyan";
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 0){ //roller-free
        document.getElementById("tdDiag").style.backgroundColor = "aqua";
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 1){ //roller-roller
        document.getElementById("tdDiag").style.backgroundColor = "pink";
    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 2){ //roller-pin - simply
        
       let reactionA = (parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;
       let reactionB = -(parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;  
       simpleReaction(reactionA, reactionB);

    }else if(parseInt(kindX.value) === 1 && parseInt(kinderX.value) === 3){ //roller-fixed
        document.getElementById("tdDiag").style.backgroundColor = "violet";
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 0){ //pin-free
        document.getElementById("tdDiag").style.backgroundColor = "grey";
    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 1){ //pin-roller - simply
        
        let reactionA = -(parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;
        let reactionB = (parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;  
        simpleReaction(reactionA, reactionB);

    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 2){ //pin-pin - simply
        
        let reactionA = (parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;
        let reactionB = (parseFloat(loadBeam.value)*parseFloat(lengthBeam.value))/2;  
        simpleReaction(reactionA, reactionB);

    }else if(parseInt(kindX.value) === 2 && parseInt(kinderX.value) === 3){ //pin-fixed
        document.getElementById("tdDiag").style.backgroundColor = "#a67719";
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 0){ //fixed-free
        document.getElementById("tdDiag").style.backgroundColor = "#b7b7b7";
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 1){ //fixed-roller
        document.getElementById("tdDiag").style.backgroundColor = "rgb(239, 173, 80)";
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 2){ //fixed-pin
        document.getElementById("tdDiag").style.backgroundColor = "rgb(143, 129, 103)";
    }else if(parseInt(kindX.value) === 3 && parseInt(kinderX.value) === 3){ //fixed-fixed
        document.getElementById("tdDiag").style.backgroundColor = "rgb(120, 74, 9)";
    }

    //----------------------------------------------------------------------------------------

    

    function simpleReaction(x,y){
        let shearAtStart = x;
        let shearAtQuarter =  x - (0.25*(x*2));
        let shearAtHalf =  x - (0.5*(x*2));
        let shearAtThirdQuarter =  -( x - (0.25*(x*2)));
        let shearAtFull =  y;
    
        shearValues = [shearAtStart, shearAtQuarter, shearAtHalf, shearAtThirdQuarter, shearAtFull];
    }

    

    // Get the canvas element where the chart will be rendered
    let ctx = document.getElementById('shearDiagram').getContext('2d');

     // Create a new chart
    let shearDiagram = new Chart(ctx, {
    type: 'line', // Type of chart (line chart in this case)
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
      datasets: [{
        label: 'Shear Diagram', // Label for the dataset
        data: shearValues, // Y-axis data points
        borderColor: 'rgb(3, 94, 94)', // Line color
        fill: true, // Don't fill the area under the line
        tension: 0.1 // Smoothness of the line
      }]
    },
    options: {
      responsive: true, // Make the chart responsive
      scales: {
        x: {
          title: {
            display: true,
            text: 'Length in meters'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Shear in Kilonewton'
          }
        }
      }
    }
  });


}

