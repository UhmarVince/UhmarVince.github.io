
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
        

        let varLength = document.getElementById("beamLength");
        let varLoad   = document.getElementById("beamLoad");
        
        let varLeftSupport = document.getElementById("options");
        let varRightSupport = document.getElementById("options100");
        
        let varRelease   = document.getElementById("release");
        
        
        
        // Store chart references globally so they can be updated later
        let shearChart, momentChart;

        // Function to calculate and update shear and moment diagrams
function showDiag() {

    let diagBoxExtend = document.getElementsByClassName("diagrams")[0];
    diagBoxExtend.style.height = "800px";
    
    let shearVis = document.getElementById("shearDiagram");
    shearVis.style.visibility = "visible";
    
    
    let momentVis = document.getElementById("momentDiagram");
    momentVis.style.visibility = "visible";
    
    // Get beam length and load values from inputs
    let varLengthValue = parseFloat(varLength.value);
    let varLoadValue = parseFloat(varLoad.value);
    
    let maxShear = (varLoadValue * varLengthValue) / 2;
    let maxMoment = (varLoadValue * (varLengthValue ** 2)) / 8;
    
    // Update shear diagram
    let distances = [0, 0.125 * varLengthValue, 0.25 * varLengthValue, 0.375 * varLengthValue, 0.5 * varLengthValue, 0.625 * varLengthValue, 0.75 * varLengthValue, 0.875 * varLengthValue, varLengthValue];
    let shears = [
    maxShear,
    (maxShear) - 0.125 * varLengthValue * varLoadValue,
    (maxShear) - 0.25 * varLengthValue * varLoadValue,
    (maxShear) - 0.375 * varLengthValue * varLoadValue,
    0,
    (-maxShear) + 0.375 * varLengthValue * varLoadValue,
    (-maxShear) + 0.25 * varLengthValue * varLoadValue,
    (-maxShear) + 0.125 * varLengthValue * varLoadValue,
    -maxShear
    ];
    
    if (shearChart) {
    shearChart.data.labels = distances;
    shearChart.data.datasets[0].data = shears;
    shearChart.update(); // Update the shear chart with new data
    }
    
    // Update moment diagram
    let moments = [
    0,
    (((maxShear) - 0.125 * varLengthValue * varLoadValue) * (0.125 * varLengthValue)) + (0.5 * (0.125 * varLengthValue) * (maxShear - ((maxShear) - 0.125 * varLengthValue * varLoadValue))),
    (((maxShear) - 0.25 * varLengthValue * varLoadValue) * (0.25 * varLengthValue)) + (0.5 * (0.25 * varLengthValue) * (maxShear - ((maxShear) - 0.25 * varLengthValue * varLoadValue))),
    (((maxShear) - 0.375 * varLengthValue * varLoadValue) * (0.375 * varLengthValue)) + (0.5 * (0.375 * varLengthValue) * (maxShear - ((maxShear) - 0.375 * varLengthValue * varLoadValue))),
    maxMoment,
    (((maxShear) - 0.375 * varLengthValue * varLoadValue) * (0.375 * varLengthValue)) + (0.5 * (0.375 * varLengthValue) * (maxShear - ((maxShear) - 0.375 * varLengthValue * varLoadValue))),
    (((maxShear) - 0.25 * varLengthValue * varLoadValue) * (0.25 * varLengthValue)) + (0.5 * (0.25 * varLengthValue) * (maxShear - ((maxShear) - 0.25 * varLengthValue * varLoadValue))),
    (((maxShear) - 0.125 * varLengthValue * varLoadValue) * (0.125 * varLengthValue)) + (0.5 * (0.125 * varLengthValue) * (maxShear - ((maxShear) - 0.125 * varLengthValue * varLoadValue))),
    0
    ];
    
    if (momentChart) {
    momentChart.data.labels = distances;
    momentChart.data.datasets[0].data = moments;
    momentChart.update(); // Update the moment chart with new data
    }
    }
    
    // Function to initialize the charts and store references
    function initializeCharts() {
    // Get the context of the canvas elements
    let shearCtx = document.getElementById('shearDiagram').getContext('2d');
    let momentCtx = document.getElementById('momentDiagram').getContext('2d');
    
    // Create the initial shear chart
    shearChart = new Chart(shearCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Shear (kN)',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Shear (kN)',
                    color: "black"
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Position Along Beam (m)',
                    color: "black"
                }
            }
        }
    }
    });
    
    // Create the initial moment chart
    momentChart = new Chart(momentCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Moment (kN-m)',
            data: [],
            backgroundColor: 'rgba(158, 182, 255, 0.2)',
            borderColor: 'rgb(63, 103, 214)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Moment (kN-m)',
                    color: "black"
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Position Along Beam (m)',
                    color: "black"
                }
            }
        }
    }
    });
    }
    
    // Call this function to initialize the charts when the page loads
    initializeCharts();
    
    // Bind the function to the input change events
    varLength.addEventListener('input', showDiag);
    varLoad.addEventListener('input', showDiag);
    varLeftSupport.addEventListener('change',showDiag);
    varRightSupport.addEventListener('change',showDiag);

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
