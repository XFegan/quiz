var timeRemaining =  questions.length * 15; 
var questionIndex=0
var pidClock
// start the game
startBtn.addEventListener("click", function () {
  questionsDiv.classList.remove("hide")
  introDiv.classList.add("hide")
  loadQuestion()
  pidClock=setInterval(countDown, 1000)
   
})
function loadQuestion(){
    console.log(questionIndex)
  title.textContent=questions[questionIndex].q
   choice1.textContent=questions[questionIndex].c[0]
   choice2.textContent=questions[questionIndex].c[1]
   choice3.textContent=questions[questionIndex].c[2]
   choice4.textContent=questions[questionIndex].c[3]


}

choice1.addEventListener("click", function(){
if(questionIndex+1==questions.length) {
    if (questions[questionIndex].a!==0){
 timeRemaining-=10 
 
}
questionsDiv.classList.add("hide")
initialDiv.classList.remove("hide")
clearInterval(pidClock)
  }
  else { questionIndex++
  if (questions[questionIndex].a!==0){
 timeRemaining-=10 
}
  loadQuestion()

  }
})


choice2.addEventListener("click", function(){
if(questionIndex+1==questions.length) {
    if (questions[questionIndex].a!==1){
 timeRemaining-=10 
 
}
questionsDiv.classList.add("hide")
initialDiv.classList.remove("hide")
clearInterval(pidClock)
  }
  else { questionIndex++
  if (questions[questionIndex].a!==1){
 timeRemaining-=10 
}
  loadQuestion()

  }
})


choice3.addEventListener("click", function(){
  if(questionIndex+1==questions.length) {
    if (questions[questionIndex].a!==2){
 timeRemaining-=10 
 
}
questionsDiv.classList.add("hide")
initialDiv.classList.remove("hide")
clearInterval(pidClock)
  }
  else { questionIndex++
  if (questions[questionIndex].a!==2){
 timeRemaining-=10 
}
  loadQuestion()

  }
 
})


choice4.addEventListener("click", function(){
 if(questionIndex+1==questions.length) {
    if (questions[questionIndex].a!==3){
 timeRemaining-=10 
 
}
questionsDiv.classList.add("hide")
initialDiv.classList.remove("hide")
clearInterval(pidClock)
  }
  else { questionIndex++
  if (questions[questionIndex].a!==3){
 timeRemaining-=10 
}
  loadQuestion()

  }
})

function countDown(){
  if(timeRemaining===0)
  {
    clearInterval(pidClock)  
    questionsDiv.classList.add("hide")  //adding the hide class to make it invisible
    initialDiv.classList.remove("hide") // removing the hide class to make it visible

  }
  TimeLeftSpan.textContent  =timeRemaining
  timeRemaining--  // timeRemaining = timeRemaining-1


}


var submitInitail=document.querySelector("#submit")
submitInitail.addEventListener("click", function(){
    var inputValue=document.querySelector("#intial").value
    localStorage.setItem("name", inputValue)
})