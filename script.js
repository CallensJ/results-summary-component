let images = document.querySelectorAll(".name img");
let names = document.querySelectorAll(".name p");
let scores = document.querySelectorAll(".bloc .userScore span");
let globalScore = document.querySelector(".circle span");

async function fetchAndDisplayData() {
  const res = await fetch("./data.json");
  //console.log(res);
  if (res.ok === true) {
    const data = await res.json();
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
      //console.log(i);
      images[i].src = data[i].icon;
      names[i].innerHTML = data[i].category;
      scores[i].innerHTML = data[i].score;
    }
    let score = Math.floor(
      (data[0].score + data[1].score + data[2].score + data[3].score) / 4
    );
    //console.log(score);
    globalScore.innerHTML = score;
    //console.log(globalScore.innerHTML = score);
  }
}

fetchAndDisplayData()
