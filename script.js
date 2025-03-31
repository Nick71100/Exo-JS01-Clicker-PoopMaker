let poops = 0;
const poopClicker = document.getElementById("poopClicker");
const poopCounter = document.getElementById("poopCounter");
const sellPoop = document.getElementById("sellPoop");
const buyLax = document.getElementById("buyLax");
const dollarsCount = document.getElementById("dollars");
let autoPoopActif = false;
let dollars = 0;
let boost = 1;
let boostActif = false;

function dollarsCounter() {
  dollarsCount.innerHTML = "<p>You have " + dollars + " $</p>";
}

function poopCounterAmt() {
  poopCounter.innerHTML = "<p>Poops : " + poops + "</p>";
}

function autoPoop() {
  poops++;
  poopCounterAmt();
}

poopClicker.addEventListener("click", function () {
  poops += boost;
  poopCounterAmt();

  if (poops >= 100 && !autoPoopActif) {
    autoPoopActif = true;
    alert("your companion comes to live with you!");
    setInterval(autoPoop, 1000);
  }
});

sellPoop.addEventListener("click", function () {
  if (poops >= 50) {
    poops -= 50;
    dollars += 50;
    poopCounterAmt();
    dollarsCounter();
  } else {
    alert("Not enought poops !.");
  }
});

buyLax.addEventListener("click", function () {
  if (dollars >= 25) {
    if (!boostActif) {
      dollars -= 25;
      dollarsCounter();
      boost = 2;
      boostActif = true;

      setTimeout(function () {
        boost = 1;
        boostActif = false;
      }, 10000);
    } else {
      alert(
        "You have already taken a laxatif, it's dangerous to take a second one now."
      );
    }
  } else {
    alert("Not enought dollars !.");
  }
});

/*fonction pour vouloir faire un bébé = autoPoop +0.5/s
/*fonction pour fabriquer une ferme à caca (500$) = autoPoop +10/s
/*fonction pour avoir un risque de constipation = poops /2 pendant 20sec
/*système de fosse septique, si il y a trop de caca, devoir invertir dans une plus grande...
/**/
