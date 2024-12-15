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
  

function releaseAll(){

let varLength = document.getElementById("beamLength");
let varLoad   = document.getElementById("beamLoad");
let varRelease   = document.getElementById("release");

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
varRelease.addEventListener('click', showDiag());

}