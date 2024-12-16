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
  



