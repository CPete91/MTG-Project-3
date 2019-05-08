// This function will take in a card object and output that same card object, but with a new attribute: allPossiblePayment. This is an array of objects. Each object is
// made up of an R, G, B, U, W, and C object, with each of these corresponding to a mana color (Red, Green, Black, Blue, White, and Colorless.) This can be looped
// through when determining the probability of mana on each turn.

// This function should be called immediately after a user clicks on a card to add it to their deck. It takes a little bit to run per card (~0.25 seconds)
// so we should set it up as an async function in the background.
const multi = require("./multi");
const manaCalculator = function(card) {
  if (!card.card_faces) {
    let multiOption = [];
    let mc = card.mana_cost.split("");
    card.options = [];
    let finalObj = {
      G: 0,
      B: 0,
      U: 0,
      W: 0,
      R: 0,
      C: 0
    };
    //   Set up two new objects. Mana is a string that will contain mana costs. A number indicates colorless mana.
    // C is colorless, G is green, B is black, U is blue, R is red, and W is white. The returned JSON is a little weird, in that it encloses everything in curly braces.
    // The for loop below removes the curly braces and just adds the elements as needed.
    for (let i = 0; i < mc.length - 1; i++) {
      if (mc[i + 1] === "/") {
        multiOption.push([mc[i], mc[i + 2]]);
        i += 2;
      } else if (mc[i] != "{" && mc[i] != "}") {
        if (isNaN(mc[i])) {
          finalObj[mc[i]]++;
        } else {
          finalObj.C += parseInt(mc[i]);
        }
      }
    }
    // console.log("mana costs", finalObj);
    // console.log("Mutli Options", multiOption);

    if (multiOption.length) {
      let arr = multi(multiOption);
      for (let i = 0; i < arr.length; i++) {
        var option = {
          G: finalObj.G,
          B: finalObj.B,
          U: finalObj.U,
          W: finalObj.W,
          R: finalObj.R,
          C: finalObj.C
        };
        for (let j = 0; j < arr[i].length; j++) {
          option[arr[i][j]]++;
        }
        if (finalObj.options.indexOf(option) === -1) {
          card.options.push(option);
        }
      }
    }
    if (card.options.length === 0) {
      card.options = [finalObj];
    }
    return card;
  } else {
    card.options = [{ G: 100, B: 100, U: 100, W: 100, R: 100, C: 100 }];
    return card;
  }
};

module.exports = manaCalculator;
