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

const canvas = document.getElementById('model');
const ctx = canvas.getContext('2d');

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