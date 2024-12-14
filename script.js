window.addEventListener("load", function () {
    // Add a delay (e.g., 15 seconds) before hiding the loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading");
        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }

        const content = document.getElementById("all");
        if (content) {
            content.style.display = "block";
        }
    }, 500); 
}); 
  




let varLength = document.getElementById("beamLength");
let varLoad   = document.getElementById("beamLoad");

function solve(){
    let maxMoment = (varLoad.value*(varLength.value**2))/8;
    if (varLoad.value > 0 && varLength.value > 0){
        let rounded2 = maxMoment;
        answer.innerText = (Math.round(rounded2*100)/100)  + " kn-m";
    }else if (varLoad.value < 0 && varLength.value > 0){
        let rounded3 = maxMoment;
        answer.innerText = (Math.round(rounded3*100)/100)  + " kn-m";
    }else{
        answer.innerText ="Error!";
    }

    let maxShear = (varLoad.value*varLength.value)/2;
    if (varLoad.value > 0 && varLength.value > 0){
        let rounded = maxShear;
        answer1.innerText = (Math.round(rounded*100)/100)  + " kn-m";
    }else if (varLoad.value < 0 && varLength.value > 0){
        let rounded1 = maxShear;
        answer1.innerText = (Math.round(rounded1*100)/100)  + " kn-m";
    }else{
        answer1.innerText ="Error!";
    }
};

/*
function showDiag(){

    let diagBoxExtend = document.getElementsByClassName("diagrams")[0];
    diagBoxExtend.style.height = "800px";

    let maxShear = (varLoad.value*varLength.value)/2;

  // Get the context of the canvas element
  let ctx = document.getElementById('shearDiagram').getContext('2d');

  // Moment diagram data (example values)
  let distances = [0, 0.125*varLength.value, 0.25*varLength.value, 0.375*varLength.value, 0.5*varLength.value, 0.625*varLength.value, 0.75*varLength.value, 0.875*varLength.value, varLength.value]; // Positions along the beam (in meters)
  let shears = [maxShear,(maxShear)-0.125*varLength.value*varLoad.value,(maxShear)-0.25*varLength.value*varLoad.value,(maxShear)-0.375*varLength.value*varLoad.value, 0,(-maxShear)+0.375*varLength.value*varLoad.value,(-maxShear)+0.25*varLength.value*varLoad.value,(-maxShear)+0.125*varLength.value*varLoad.value, -maxShear]; // Corresponding shears at each position (in kNm)

  // Create the chart
  let shearChart = new Chart(ctx, {
      type: 'line', // Line chart type
      data: {
          labels: distances, // X-axis labels (position along the beam)
          datasets: [{
              label: 'Shear (kN)',
              data: shears, // Shear values (Y-axis)
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Fill color under the curve
              borderColor: 'rgba(255, 99, 132, 1)', // Line color
              borderWidth: 2,
              fill: true// Enable fill under the line (for the moment diagram)
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: false, // Shear diagram can go negative, so don't start from zero
                  title: {
                      display: true,
                      text: 'Shear (kN)', // Y-axis title
                      color: "black"
                  }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Position Along Beam (m)', // X-axis title
                      color: "black"
                  }
              }
          }
      }
  });

   
  let maxMoment = (varLoad.value*(varLength.value**2))/8;

  // Get the context of the canvas element
   let ctx1 = document.getElementById('momentDiagram').getContext('2d');

   // Moment diagram data (example values)
   let distances1 = [0, 0.125*varLength.value, 0.25*varLength.value, 0.375*varLength.value, 0.5*varLength.value, 0.625*varLength.value, 0.75*varLength.value, 0.875*varLength.value, varLength.value]; // Positions along the beam (in meters)
   let moments = [0,(((maxShear)-0.125*varLength.value*varLoad.value)*(0.125*varLength.value))+(0.5*(0.125*varLength.value)*(maxShear-((maxShear)-0.125*varLength.value*varLoad.value))),
    (((maxShear)-0.25*varLength.value*varLoad.value)*(0.25*varLength.value))+(0.5*(0.25*varLength.value)*(maxShear-((maxShear)-0.25*varLength.value*varLoad.value))),
    (((maxShear)-0.375*varLength.value*varLoad.value)*(0.375*varLength.value))+(0.5*(0.375*varLength.value)*(maxShear-((maxShear)-0.375*varLength.value*varLoad.value)))
    ,maxMoment,
    (((maxShear)-0.375*varLength.value*varLoad.value)*(0.375*varLength.value))+(0.5*(0.375*varLength.value)*(maxShear-((maxShear)-0.375*varLength.value*varLoad.value))),
    (((maxShear)-0.25*varLength.value*varLoad.value)*(0.25*varLength.value))+(0.5*(0.25*varLength.value)*(maxShear-((maxShear)-0.25*varLength.value*varLoad.value))),
    (((maxShear)-0.125*varLength.value*varLoad.value)*(0.125*varLength.value))+(0.5*(0.125*varLength.value)*(maxShear-((maxShear)-0.125*varLength.value*varLoad.value))),0]; // Corresponding shears at each position (in kNm)
 
   // Create the chart
   let momentChart = new Chart(ctx1, {
       type: 'line', // Line chart type
       data: {
           labels: distances1, // X-axis labels (position along the beam)
           datasets: [{
               label: 'Moment (kN-m)',
               data: moments, // Shear values (Y-axis)
               backgroundColor: 'rgba(158, 182, 255, 0.2)', // Fill color under the curve
               borderColor: 'rgb(63, 103, 214)', // Line color
               borderWidth: 2,
               fill: true// Enable fill under the line (for the moment diagram)
           }]
       },
       options: {
           responsive: true,
           scales: {
               y: {
                   beginAtZero: false, // Shear diagram can go negative, so don't start from zero
                   title: {
                       display: true,
                       text: 'Moment (kN-m)', // Y-axis title
                       color: "black"
                   }
               },
               x: {
                   title: {
                       display: true,
                       text: 'Position Along Beam (m)', // X-axis title
                       color: "black"
                   }
               }
           }
       }
   });

}
*/

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



// Get the canvas and its context
const canvas2 = document.getElementById('model');
const ctx = canvas2.getContext('2d');

// Get the input elements
const numberInput = document.getElementById('beamLength');
const numberInput1 = document.getElementById('beamLoad');

// Flags to check if drawings need to be initialized
let isBeamInitialized = false;
let isUDLInitialized = false;

// Function to initialize the beam drawing
function initializeBeam() {
    // Draw the beam only if beamLength input exists
    if (numberInput.value && !isBeamInitialized) {
        // Draw the beam
        ctx.fillStyle = '#4f4f4f'; // Fill color for beam
        ctx.fillRect(50, 100, 235, 10); // Draw beam (x, y, width, height)

        ctx.strokeStyle = '#4f4f4f'; // Border color
        ctx.lineWidth = 3; // Border thickness
        ctx.strokeRect(50, 100, 235, 10); // Outline beam

        // Mark as initialized to prevent redrawing
        isBeamInitialized = true;
    }
}

// Function to initialize the UDL and point loads drawing
function initializeUDL() {
    // Draw the UDL and point loads only if beamLoad input exists
    if (numberInput1.value && !isUDLInitialized) {
        // Draw the UDL (Uniformly Distributed Load)
        ctx.beginPath();
        ctx.moveTo(50, 60); // Starting point (x1, y1)
        ctx.lineTo(283, 60); // Ending point (x2, y2)
        ctx.strokeStyle = 'white'; // Line color
        ctx.lineWidth = 2; // Line thickness
        ctx.stroke(); // Render the line

        // Draw point loads (left, middle, right)
        drawPointLoad(50);
        drawPointLoad(162);
        drawPointLoad(283);

        // Mark as initialized to prevent redrawing
        isUDLInitialized = true;
    }
}

// Function to draw a point load at a specified x-coordinate
function drawPointLoad(x) {
    // Vertical line for the arrow
    ctx.beginPath();
    ctx.moveTo(x, 60); // Starting point
    ctx.lineTo(x, 100); // Ending point
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(x - 5, 90); // Left point of the arrowhead
    ctx.lineTo(x, 100); // Bottom point of the arrowhead
    ctx.lineTo(x + 5, 90); // Right point of the arrowhead
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}

// Function to update the beam length text
function updateBeamLengthText() {
    const text = numberInput.value;

    // Clear the text area for the beam length
    ctx.clearRect(150, 130, 100, 20); // Clear only the text area

    ctx.font = '15px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text + " m", 160, 145); // Draw text (text, x, y)
}

// Function to update the beam load text
function updateBeamLoadText() {
    const text1 = numberInput1.value;

    // Clear the text area for the beam load
    ctx.clearRect(50, 20, 100, 30); // Clear only the text area

    ctx.font = '15px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text1 + " kn/m", 60, 40); // Draw text (text, x, y)
}

// Add input event listeners to the textboxes
numberInput.addEventListener('input', () => {
    // Initialize the beam only if input exists
    initializeBeam();
    updateBeamLengthText();
});

numberInput1.addEventListener('input', () => {
    // Initialize the UDL only if input exists
    initializeUDL();
    updateBeamLoadText();
});


function addSupportLeft(){
    const supportleft = document.getElementById("options");
    const leftie = supportleft.value;
    
    if(leftie === "option1"){
    const canvas2 = document.getElementById('model');
    const ctx = canvas2.getContext('2d');
    
    ctx.clearRect(36, 112, 100, 100);   
    // Start a new path for the triangle
    ctx.beginPath();

    // Define the triangle on the left
    ctx.moveTo(50, 113);  // First corner
    ctx.lineTo(60, 133);  // Second corner
    ctx.lineTo(40, 133);  // Third corner

    // Close the path and fill
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();

    // Optional: Add stroke outline
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    }else if(leftie === "option-1"){
        ctx.clearRect(36, 112, 100, 100);
    }else if(leftie === "option3"){
        ctx.clearRect(36, 112, 100, 100);

        const x = 50;  // X coordinate
        const y = 123;  // Y coordinate
        const radius = 10;  // Radius of the circle

        // Begin drawing the circle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw circle (x, y, radius, startAngle, endAngle)

        // Fill the circle with black
        ctx.fillStyle = 'black';
        ctx.fill();  // Fill the circle

        // Stroke the circle with black
        ctx.lineWidth = 2;  // Set the stroke width
        ctx.strokeStyle = 'black';
        ctx.stroke();  // Apply stroke

        ctx.closePath();  // Close the path (optional)
        }
}


    const supportleft = document.getElementById("options");
    supportleft.addEventListener('change',addSupportLeft);


    function addSupportRight(){
        const supportRight = document.getElementById("options100");
        const rightie = supportRight.value;
        
        if(rightie === "option1"){
        
            
        const canvas2 = document.getElementById('model');
        const ctx = canvas2.getContext('2d');
        ctx.clearRect(273, 112, 100, 100);
        // Start a new path for the triangle
        ctx.beginPath();
    
        // Define the triangle on the left
        ctx.moveTo(285, 113);  // First corner
        ctx.lineTo(295, 133);  // Second corner
        ctx.lineTo(275, 133);  // Third corner
    
        // Close the path and fill
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
    
        // Optional: Add stroke outline
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        }else if(rightie === "option-1"){
            ctx.clearRect(273, 112, 100, 100);
        }else if(rightie === "option3"){
        ctx.clearRect(273, 112, 100, 100);

        const x = 285;  // X coordinate
        const y = 123;  // Y coordinate
        const radius = 10;  // Radius of the circle

        // Begin drawing the circle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw circle (x, y, radius, startAngle, endAngle)

        // Fill the circle with black
        ctx.fillStyle = 'black';
        ctx.fill();  // Fill the circle

        // Stroke the circle with black
        ctx.lineWidth = 2;  // Set the stroke width
        ctx.strokeStyle = 'black';
        ctx.stroke();  // Apply stroke

        ctx.closePath();  // Close the path (optional)
        }
    
    }
        const supportRight = document.getElementById("options100");
        supportRight.addEventListener('change',addSupportRight);
    

/*














const canvas1 = document.getElementById('model');
const ctx = canvas1.getContext('2d');

ctx.beginPath(); // Start a new path
ctx.moveTo(50, 50); // Starting point (x1, y1)
ctx.lineTo(283, 50); // Ending point (x2, y2)
ctx.strokeStyle = 'white'; // Line color
ctx.lineWidth = 2; // Line thickness
ctx.stroke(); // Render the line


ctx.fillStyle = '#4f4f4f'; // Fill color
ctx.fillRect(50, 100, 235, 10); // Draw rectangle (x, y, width, height)

ctx.strokeStyle = '#4f4f4f'; // Border color
ctx.lineWidth = 3; // Border thickness
ctx.strokeRect(50, 100, 235, 10); // Outline rectangle




//triangle
ctx.beginPath();


//left support
// Define the three corners of the triangle
ctx.moveTo(50,110); // First corner (x1, y1)
ctx.lineTo(60, 130); // Second corner (x2, y2)
ctx.lineTo(40, 130);  // Third corner (x3, y3)

// Close the path to connect the last point to the first
ctx.closePath();

// Set fill color and fill the triangle
ctx.fillStyle = 'black';
ctx.fill();

// Optional: Set stroke color and outline the triangle
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

//right support
// Define the three corners of the triangle
ctx.moveTo(285,110); // First corner (x1, y1)
ctx.lineTo(295, 130); // Second corner (x2, y2)
ctx.lineTo(275, 130);  // Third corner (x3, y3)

// Close the path to connect the last point to the first
ctx.closePath();

// Set fill color and fill the triangle
ctx.fillStyle = 'black';
ctx.fill();

// Optional: Set stroke color and outline the triangle
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

//LEFT POINT LOAD
// Vertical line for the arrow
ctx.beginPath();
ctx.moveTo(50, 50); // Starting point
ctx.lineTo(50, 100); // Ending point
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.stroke();

// Arrowhead
ctx.beginPath();
ctx.moveTo(40, 80); // Left point of the arrowhead
ctx.lineTo(50, 100); // Bottom point of the arrowhead
ctx.lineTo(60, 80); // Right point of the arrowhead
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();


// RIGHT POINT LOAD
// Vertical line for the arrow
ctx.beginPath();
ctx.moveTo(283, 50); // Starting point
ctx.lineTo(283, 100); // Ending point
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.stroke();

// Arrowhead
ctx.beginPath();
ctx.moveTo(273, 80); // Left point of the arrowhead
ctx.lineTo(283, 100); // Bottom point of the arrowhead
ctx.lineTo(293, 80); // Right point of the arrowhead
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();



//MIDDLE POINT LOAD
// Vertical line for the arrow
ctx.beginPath();
ctx.moveTo(162, 50); // Starting point
ctx.lineTo(162, 100); // Ending point
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.stroke();

// Arrowhead
ctx.beginPath();
ctx.moveTo(152, 80); // Left point of the arrowhead
ctx.lineTo(162, 100); // Bottom point of the arrowhead
ctx.lineTo(172, 80); // Right point of the arrowhead
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

//TEXT

    // Set font properties
    ctx.font = "20px Arial"; // font size and font family
    ctx.fillStyle = "blue";  // text fill color
    ctx.textAlign = "center"; // align the text (left, right, center)
    ctx.textBaseline = "middle"; // baseline of the text

    // Draw filled text
    ctx.fillText(varLoad.value, canvas.width / 2, canvas.height / 2);

    // Optional: Draw outlined text
    ctx.strokeStyle = "red"; // text stroke color
    ctx.lineWidth = 1;       // stroke width
    ctx.strokeText("Hello, Canvas!", canvas.width / 2, canvas.height / 2 + 40);


*/