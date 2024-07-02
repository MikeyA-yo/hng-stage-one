// Function to get the current day of the week
function getCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    return days[today.getDay()];
}

// Display the current day of the week

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("current-day").innerText = getCurrentDay();
    document.getElementById("current-time").innerText = new Date().toUTCString()
    setInterval(()=>{
        document.getElementById("current-time").innerText = new Date().toUTCString()
    }, 1000)
});
