function manaCalculator(card) {
  let multiOption = [];
  let mc = card.mana_cost.split("");
  let finalObj = {
    G: 0,
    B: 0,
    U: 0,
    W: 0,
    R: 0,
    C: 0,
    options: []
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

  let arr = multi(multiOption);
  for (let i = 0; i < arr.length; i++) {
    let option = {
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
      finalObj.options.push(option);
    }
  }

  console.log(finalObj.options);
}

function multi(arr) {
  // arr is expected to be a 1 x n array of 1 x 2 arrays.
  let options = Math.pow(2, arr.length);
  //   options is the total number of possible combinations for n element taken 2 at a time. We can safely say 2
  // at a time because that's how magic works. Dave said so. No take backsies, Wizards of the Coast!
  let finalArr = [];
  for (let i = 0; i < options / 2; i++) {
    finalArr.push([arr[0][0]]);
  }
  for (let i = 0; i < options / 2; i++) {
    finalArr.push([arr[0][1]]);
  }

  //   console.log(finalArr);
  // We create a final array that is composed of one array for each possible combination. We initially populate half of the array with the 0th mana type of
  // the first option, and the other half of the array with the 1st mana type of the first option. We will use this 50% fill rate to inform all subsequent calculations.

  for (let i = 1; i < arr.length - 1; i++) {
    // Index this loop at 1, because we already pre-populated our final array with the 0th value.
    let zerozero = 0;
    let zeroone = 0;
    let oneone = 0;
    let onezero = 0;
    for (let j = 0; j < finalArr.length; j++) {
      if (j === 0) {
        finalArr[j].push(arr[i][0]);
        zerozero++;
        // console.log("First element R");
      } else if (finalArr[j][i - 1] === arr[i - 1][0]) {
        // console.log("First element", arr[i - 1][0], j);
        if (zerozero < options / 4) {
          finalArr[j].push(arr[i][0]);

          zerozero++;
        } else if (zeroone < options / 4) {
          finalArr[j].push(arr[i][1]);

          zeroone++;
        }
      } else if (finalArr[j][i - 1] === arr[i - 1][1]) {
        // console.log("First element", arr[i - 1][1], j);
        if (onezero < options / 4) {
          finalArr[j].push(arr[i][0]);
          onezero++;
        } else if (oneone < options / 4) {
          finalArr[j].push(arr[i][1]);
          oneone++;
        }
      }
    }
  }

  //   console.log("2", finalArr, "2");
  //   finalArr[0].push(arr[arr.length - 1][0]);

  for (let i = 0; i < finalArr.length; i++) {
    if (i % 2 === 0) {
      finalArr[i].push(arr[arr.length - 1][1]);
      //   console.log("Pushed a 0");
    } else {
      finalArr[i].push(arr[arr.length - 1][0]);
      //   console.log("Pushed a 1");
    }
  }

  return finalArr;
}

let ex = {
  object: "card",
  id: "cdc5666c-6f27-4ae9-8f0e-17e2a44bc646",
  oracle_id: "5f079a75-899e-467d-b443-3b87ce2fb548",
  multiverse_ids: [426031],
  mtgo_id: 63477,
  mtgo_foil_id: 63478,
  tcgplayer_id: 128843,
  name: "Boros Reckoner",
  lang: "en",
  released_at: "2017-03-17",
  uri: "https://api.scryfall.com/cards/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646",
  scryfall_uri:
    "https://scryfall.com/card/mm3/206/boros-reckoner?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_uris: {
    small: "https://img.scryfall.com/cards/small/en/mm3/206.jpg?1517813031",
    normal: "https://img.scryfall.com/cards/normal/en/mm3/206.jpg?1517813031",
    large: "https://img.scryfall.com/cards/large/en/mm3/206.jpg?1517813031",
    png: "https://img.scryfall.com/cards/png/en/mm3/206.png?1517813031",
    art_crop:
      "https://img.scryfall.com/cards/art_crop/en/mm3/206.jpg?1517813031",
    border_crop:
      "https://img.scryfall.com/cards/border_crop/en/mm3/206.jpg?1517813031"
  },
  mana_cost: "{R/W}{R/W}{R/W}",
  cmc: 3,
  type_line: "Creature — Minotaur Wizard",
  oracle_text:
    "Whenever Boros Reckoner is dealt damage, it deals that much damage to any target.\n{R/W}: Boros Reckoner gains first strike until end of turn.",
  power: "3",
  toughness: "3",
  colors: ["R", "W"],
  color_identity: ["R", "W"],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    frontier: "not_legal",
    modern: "legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "legal",
    commander: "legal",
    duel: "legal",
    oldschool: "not_legal"
  },
  games: ["mtgo", "paper"],
  reserved: false,
  foil: true,
  nonfoil: true,
  oversized: false,
  promo: false,
  reprint: true,
  set: "mm3",
  set_name: "Modern Masters 2017",
  set_uri: "https://api.scryfall.com/sets/02624962-f727-4c31-bbf2-a94fa6c5b653",
  set_search_uri:
    "https://api.scryfall.com/cards/search?order=set&q=e%3Amm3&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/mm3?utm_source=api",
  rulings_uri:
    "https://api.scryfall.com/cards/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A5f079a75-899e-467d-b443-3b87ce2fb548&unique=prints",
  collector_number: "206",
  digital: false,
  rarity: "rare",
  flavor_text:
    "\"Imagine a thunderstorm that's also a tactical genius. That's him.\" —Dars Gostok, Firefist captain",
  illustration_id: "5204a467-e10e-4d30-8a2e-db6c7f8f4ddf",
  artist: "Howard Lyon",
  border_color: "black",
  frame: "2015",
  full_art: false,
  story_spotlight: false,
  edhrec_rank: 3401,
  usd: "0.74",
  eur: "0.78",
  tix: "0.01",
  prices: {
    usd: "0.74",
    usd_foil: "1.77",
    eur: "0.78",
    tix: "0.01"
  },
  related_uris: {
    gatherer:
      "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=426031",
    tcgplayer_decks:
      "https://decks.tcgplayer.com/magic/deck/search?contains=Boros+Reckoner&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
    edhrec: "http://edhrec.com/route/?cc=Boros+Reckoner",
    mtgtop8:
      "http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Boros+Reckoner"
  },
  purchase_uris: {
    tcgplayer:
      "https://shop.tcgplayer.com/magic/modern-masters-2017/boros-reckoner?partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products/Singles/Modern-Masters-2017/Boros-Reckoner?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards/63477?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
  }
};
manaCalculator(ex);
