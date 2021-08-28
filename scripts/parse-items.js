// Imports
const fs = require("fs");

const inventorySlots = {
  chest: [],
  foot: [],
  hand: [],
  head: [],
  neck: [],
  ring: [],
  waist: [],
  weapon: [],
}

// Load data
const dataLoot = fs.readFileSync("data/loot.json");
const loot = JSON.parse(dataLoot);

// Add item to inventory slot list if it's not already there
const items = loot.reduce((slots, bag, index) => {
  const bagSlots = bag[index + 1]
  Object.keys(bagSlots).forEach(slot => {
    const item = bagSlots[slot]
    if (!slots[slot].includes(item)) {
      slots[slot] = [...slots[slot], item]
    }
  })
  return slots
}, inventorySlots)

// Output items
fs.writeFileSync(
  "data/items.json",
  JSON.stringify(items, null, 2)
);