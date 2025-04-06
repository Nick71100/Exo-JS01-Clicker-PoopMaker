let poops = 0;
const poopClicker = document.getElementById("poop-clicker");
const poopCounter = document.getElementById("poop-counter");
const boostAmt = document.getElementById("poop-boost");

const dollarsCount = document.getElementById("dollars");

const sellPoop = document.getElementById("sell-poop");
const buyLax = document.getElementById("buy-lax");
const buyCow = document.getElementById("buy-cow");

let autoPoopActive = false;
let dollars = 0;
let poopAmt = 1;
let poopBoost = 0;
let boostLaxActive = false;
let boosterCounter = 1;

function dollarsCounter() {
  dollarsCount.innerHTML = "<p>You have " + dollars + " $</p>";
}

function poopBoosterCounter() {
  boosterCounter = poopAmt + poopBoost;
  boostAmt.innerHTML = "<p>Boost : x" + boosterCounter + "</p>";
}

function poopCounterAmt() {
  poopCounter.innerHTML = "<p>Poops : " + poops + "</p>";
}

function autoPoop() {
  poops++;
  poopCounterAmt();
}

poopClicker.addEventListener("click", function () {
  poops += poopAmt + poopBoost;
  poopCounterAmt();

  if (poops >= 100 && !autoPoopActive) {
    autoPoopActive = true;
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
    alert("Not enough poops !");
  }
});

buyLax.addEventListener("click", function () {
  if (dollars >= 25) {
    if (!boostLaxActive) {
      dollars -= 25;
      dollarsCounter();
      poopBoost += 1;
      poopBoosterCounter();
      boostLaxActive = true;

      setTimeout(function () {
        poopBoost -= 1;
        boostLaxActive = false;
        poopBoosterCounter();
      }, 10000);
    } else {
      alert(
        "You have already taken a laxative, it's dangerous to take a second one now."
      );
    }
  } else {
    alert("Not enough dollars !");
  }
});

buyCow.addEventListener("click", function () {
  if (dollars >= 250) {
    dollars -= 250;
    dollarsCounter();
    poopAmt += 3;
    poopBoosterCounter();
  } else {
    alert("Not enought dollars !");
  }
});

/*fonction pour vouloir faire un bébé = autoPoop +0.5/s
/*fonction pour fabriquer une ferme à caca (500$) = autoPoop +10/s
/*fonction pour avoir un risque de constipation = poops /2 pendant 20sec
/*système de fosse septique, si il y a trop de caca, devoir invertir dans une plus grande...
/**/
