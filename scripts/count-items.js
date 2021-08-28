// Imports
const fs = require("fs");

// Load data
const dataItems = fs.readFileSync("data/items.json");
const items = JSON.parse(dataItems);

const itemCount = {
  chest: 0,
  foot: 0,
  hand: 0,
  head: 0,
  neck: 0,
  ring: 0,
  waist: 0,
  weapon: 0,
}

const itemsCounted = Object.keys(items).reduce((acc, key) => {
  acc[key] = items[key].length
  return acc
}, itemCount)

// Output items
fs.writeFileSync(
  "data/item-count.json",
  JSON.stringify(itemsCounted, null, 2)
);