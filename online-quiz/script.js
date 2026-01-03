// LOGIN FUNCTION
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if(u === "" || p === "") {
    msg.innerText = "Please enter username and password";
    msg.style.color = "red";
    return;
  }
  window.location.href = "instructions.html";
}

// QUIZ QUESTIONS – 5 QUESTIONS
let questions = [
  {q:"HTML stands for?", o:["Hyper Text Markup Language","High Text Machine","Hyper Tool","None"], a:0},
  {q:"CSS is used for?", o:["Logic","Styling","Database","Server"], a:1},
  {q:"JavaScript is a ____ language", o:["Markup","Programming","Styling","Database"], a:1},
  {q:"Which tag is used for links in HTML?", o:["<a>","<link>","<href>","<url>"], a:0},
  {q:"Which property changes text color in CSS?", o:["font-color","text-color","color","background"], a:2}
];

let index = 0;
let score = 0;

// LOAD QUESTION
function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;
  let btns = document.querySelectorAll(".options button");
  btns.forEach((b,i)=>b.innerText = questions[index].o[i]);
  document.getElementById("progress").innerText = `Question ${index+1} of ${questions.length}`;
}

// CHECK ANSWER
function checkAnswer(i) {
  if(i === questions[index].a) score++;
  index++;
  if(index < questions.length) loadQuestion();
  else showResult();
}

// SHOW RESULT – CIRCLE CHART
function showResult() {
  let total = questions.length;
  let wrong = total - score;
  let correctPercent = (score/total)*100;

  document.body.innerHTML = `
    <div style="
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      height:100vh;
      background:linear-gradient(135deg, #89f7fe, #66a6ff);
      text-align:center;
      color:white;
      font-family: Arial,sans-serif;
    ">
      <h1>Quiz Completed 🎉</h1>
      <div style="
        width:250px;
        height:250px;
        border-radius:50%;
        background: conic-gradient(#2ecc71 ${correctPercent}%, #e74c3c ${correctPercent}% 100%);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:24px;
        color:white;
        margin:20px 0;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
      ">
        ${score}/${total}
      </div>
      <p style="color:#2ecc71; font-weight:bold;">Correct: ${score}</p>
      <p style="color:#e74c3c; font-weight:bold;">Wrong: ${wrong}</p>
      <button onclick="location.reload()" style="
        padding:10px 20px;
        border:none;
        border-radius:20px;
        background:linear-gradient(to right, #ff512f, #dd2476);
        color:white;
        cursor:pointer;
        margin-top:20px;
      ">Restart Quiz</button>
    </div>
  `;
}

// INITIAL LOAD
if(document.getElementById("question")) loadQuestion();
