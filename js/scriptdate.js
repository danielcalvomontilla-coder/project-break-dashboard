console.log("funcionadate")

const date = document.getElementById("date");
const line = document.getElementById("line");

function eternalTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear(); 

  function refreshLine (hours) {      
    if (hours >= 0 && hours <= 7) {
      return "Abhor the Witch, Destroy the Witch";
  } else if (hours > 7 && hours <= 12) {
      return "Accept Any Challenge, No Matter the Odds";
  } else if (hours > 12 && hours <= 14) {
      return "Uphold the Honor of the Emperor";
  } else if (hours > 14 && hours <= 16) {
      return "Suffer Not the Unclean to Live";
  } else if (hours > 16 && hours <= 18) {
      return "Where the Neophyte sees only the difficulties and the Initiate only the advantages in any great enterprise, the hero sees both.";
  } else if (hours > 18 && hours <= 22) {
      return "To the darkness I bring fire. To the ignorant I bring faith.";
  } else {
      return "Only in death does duty end.";
  }}

line.innerHTML = refreshLine();

const pad = n => String(n).padStart(2, "0");

  function showDate() {
    return `
      <h2>${pad(hours)}:${pad(minutes)}:${pad(seconds)}</h2>
      <h2>${pad(day)}/${pad(month)}/${year}</h2>
    `;
  }
   if (time) date.innerHTML = showDate();  
}
eternalTime();

setInterval(eternalTime, 1000);









