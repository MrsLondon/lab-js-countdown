const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

//Start Countdown button.When clicked, it triggers 
//the startCountdown() function to begin the countdown process.
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () =>{
  startCountdown();
})

// ITERATION 2: Start Countdown
//1.Disables the button to prevent multiple countdowns.
//2.Initializes remainingTime to 10 seconds.
//3.Updates the #time div every second using setInterval().
//4.When remainingTime reaches 0:
//5.Stops the timer with clearInterval.
//6.Re-enables the button.
//7.Calls showToast("Lift off! 🚀") to display the final message.

function startCountdown() {
  startButton.disabled = true;
  remainingTime = DURATION;
  console.log("startCountdown called!");
  document.getElementById("time").innerText = remainingTime;
  timer = setInterval(()=> {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    if(remainingTime <= 0){
      clearInterval(timer);
      startButton.disabled = false;
      showToast("Lift off! 🚀");
    }
  },1000)
  }




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.innerText = message;
  toast.classList.add("show");
  setTimeout(()=>{
    toast.classList.remove("show");
  }, 3000);
  }

  // Your code goes here ...

  console.log(toast);
  console.log(toastMessage);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeButton = document.getElementById("close-toast");
closeButton.addEventListener("click", () =>{
  if(timer){
    clearInterval(timer);
  }
  const toast = document.getElementById("toast");
  toast.classList.remove("show");

  
});