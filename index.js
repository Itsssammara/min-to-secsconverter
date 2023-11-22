document.getElementById("myBtn").addEventListener("click", convertMinutestoSeconds);

function convertMinutestoSeconds(){

    let minutesInput = document.getElementById("minutes");
    
    let minutes = parseInt(minutesInput.value);

    let seconds = minutes * 60;

    let resultElement = document.getElementById("result");
    resultElement.textContent = minutes + " minutes is equal to " + seconds + " seconds.";
}