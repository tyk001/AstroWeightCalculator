var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

function clickHandler() {
    var myWeightValue = document.getElementById("myWeight").value;
    var dd = document.getElementById("pListing");
    var enteredPlanet = dd.options[dd.selectedIndex].text;
    findPlanet(enteredPlanet, myWeightValue)
}

function findPlanet(enteredPlanet, myWeightValue) {
    for (var j = 0; j < planets.length; j++) {
        if (planets[j].planet == enteredPlanet) {
            var planetsGravity = planets[j].gravity;
        } else {}
    }
    doCalc(planetsGravity, myWeightValue, enteredPlanet);
}

function doCalc(planetsGravity, myWeightValue, enteredPlanet) {
    var answer = Math.round(planetsGravity * myWeightValue);
    displayCalc(answer, enteredPlanet);
}

function displayCalc(answer, enteredPlanet) {
    var newdiv = document.createElement("div");
    newdiv.appendChild(document.createTextNode("If you were on " + enteredPlanet + ", you would weigh " + answer + "lbs!"));
    document.body.appendChild(newdiv);
}
