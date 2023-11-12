const text = "Your text goes here";
        const speed = 100; // Adjust the speed of typing

        let i = 0;
        const textContainer = document.getElementById('biz');

        function type() {
            if (i < text.length) {
                textContainer.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }



















































//function updateProgressBar(percentage) {
    //var progressBar = document.getElementById("my-progress-bar");
   // progressBar.style.width = percentage + "%";
    //progressBar.innerHTML = percentage + "%";
  //}//

  // Example usage: updateProgressBar(50); // Updates the progress to 50%

//document.addEventListener("DOMContentLoaded",   function simulateProgress() {
   // var percentage = 0;
    //var interval = setInterval(function () {
     // percentage += 1;
     // updateProgressBar(percentage);
      //if (percentage >= 50) {
       // clearInterval(interval);
      //}//
    //}, 50); // Adjust the interval duration for faster or slower progress
  //});//
  
  // Call simulateProgress to see the progress bar in action
 // simulateProgress();//
