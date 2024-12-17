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
        ctx.strokeStyle = 'black'; // Line color
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
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(x - 5, 90); // Left point of the arrowhead
    ctx.lineTo(x, 100); // Bottom point of the arrowhead
    ctx.lineTo(x + 5, 90); // Right point of the arrowhead
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();
}



//----------------------------------------------------------------------------------------------------


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


function determinacy(){
    const optionSup = document.getElementById("options");
    const optionSup100 = document.getElementById("options100");

    const kind = optionSup.options[optionSup.selectedIndex];   
    const kinder = optionSup100.options[optionSup100.selectedIndex]; 

    loopSup(kind, kinder);  


    function loopSup(x,y){
        const sum = parseInt(x.value) + parseInt(y.value);
        if (sum < 3) {

            const canvas3 = document.getElementById('model');
            const ctx = canvas3.getContext('2d');

            ctx.clearRect(200, 20, 200, 40); // Clear only the text area

            ctx.font = '15px Courier';
            ctx.fillStyle = 'red';
            ctx.fillText("Unstable!", 200, 40);
        } else {
            const canvas3 = document.getElementById('model');
            const ctx = canvas3.getContext('2d');

            ctx.clearRect(200, 20, 100, 40); // Clear only the text area

            ctx.font = '15px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText("", 200, 40);
        }
    } 
}

const optionSupx = document.getElementById("options");
const optionSup100x = document.getElementById("options100");

numberInput.addEventListener('input',startDeterminacy);
numberInput1.addEventListener('input',startDeterminacy);

function startDeterminacy(){
    optionSupx.addEventListener('change',determinacy);
    optionSup100x.addEventListener('change',determinacy);
    numberInput.addEventListener('input',determinacy);
    numberInput1.addEventListener('input',determinacy);
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


//----------------------------------------------------------------------------------------------------------------


function addSupportLeft(){
    const supportleft = document.getElementById("options");
    const leftie = supportleft.value;
    
    if(leftie === "2"){
    const canvas2 = document.getElementById('model');
    const ctx = canvas2.getContext('2d');
    
    ctx.clearRect(36, 112, 100, 100);
    ctx.clearRect(36, 80, 10, 50);   

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
    }else if(leftie === "0"){
        ctx.clearRect(36, 112, 100, 100);
        ctx.clearRect(36, 80, 10, 50);   
    }else if(leftie === "1"){
        ctx.clearRect(36, 112, 100, 100);
        ctx.clearRect(36, 80, 10, 50);   

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
    }else if(leftie === "3"){
            ctx.clearRect(36, 112, 100, 100);
            ctx.clearRect(40, 80, 3, 50);
    
            ctx.beginPath(); // Start a new path
            ctx.moveTo(43, 80); // Starting point (x1, y1)
            ctx.lineTo(43, 130); // Ending point (x2, y2)
            ctx.strokeStyle = 'black'; // Line color
            ctx.lineWidth = 6; // Line thickness
            ctx.stroke(); // Render the line
    }
}


    const supportleft = document.getElementById("options");
    supportleft.addEventListener('change',addSupportLeft);


    function addSupportRight(){
        const supportRight = document.getElementById("options100");
        const rightie = supportRight.value;
        
        if(rightie === "2"){
        
            
        const canvas2 = document.getElementById('model');
        const ctx = canvas2.getContext('2d');
        ctx.clearRect(273, 112, 100, 100);
        ctx.clearRect(288, 80, 50, 50);
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
        }else if(rightie === "0"){
            ctx.clearRect(273, 112, 100, 100);
            ctx.clearRect(288, 80, 50, 50);
        }else if(rightie === "1"){
        ctx.clearRect(273, 112, 100, 100);
        ctx.clearRect(288, 80, 50, 50);

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
        }else if(rightie === "3"){
        ctx.clearRect(273, 112, 100, 100);
        ctx.clearRect(288, 80, 50, 50);
        

        ctx.beginPath(); // Start a new path
        ctx.moveTo(291, 80); // Starting point (x1, y1)
        ctx.lineTo(291, 130); // Ending point (x2, y2)
        ctx.strokeStyle = 'black'; // Line color
        ctx.lineWidth = 6; // Line thickness
        ctx.stroke(); // Render the line
        }
    
    }
        const supportRight = document.getElementById("options100");
        supportRight.addEventListener('change',addSupportRight);