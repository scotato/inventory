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
};

// Load data
const dataRare = fs.readFileSync("src/data/rare.json");
const dataLoot = fs.readFileSync("src/data/loot.json");
const dataParts = fs.readFileSync("src/data/item-parts.json");
const rare = JSON.parse(dataRare);
const loot = JSON.parse(dataLoot);
const parts = JSON.parse(dataParts);
const { suffixes, namePrefixes, nameSuffixes } = parts;
let rareUpdate = [];

// Add item to inventory slot list if it's not already there
const itemParts = [];
const items = loot.reduce((slots, bag, index) => {
  let itemScore = 0;
  const id = index + 1;
  const bagSlots = bag[id];
  const existingRarity = rare.find((item) => item.lootId === id);

  Object.keys(bagSlots).forEach((slot) => {
    const item = bagSlots[slot];
    const itemPart = parseItemParts(bagSlots);
    itemParts.push({ [id]: itemPart });
    itemScore += itemPart[slot].score;

    if (!slots[slot].includes(item)) {
      slots[slot] = [...slots[slot], item];
    }
  });

  rareUpdate.push({
    ...existingRarity,
    itemScore,
  });

  return slots;
}, inventorySlots);

function parseItemParts(item) {
  return Object.keys(item).reduce((acc, slot) => {
    let score = 1;
    const name = item[slot];

    acc[slot] = {
      item: findItemType(name, parts),
      suffix: suffixes.find((suffix) => name.includes(suffix)) || null,
      namePrefix: namePrefixes.find((prefix) => name.includes(prefix)) || null,
      nameSuffix: nameSuffixes.find((suffix) => name.includes(suffix)) || null,
      bonus: name.includes("+1"),
    };
    if (acc[slot].suffix) score++;
    if (name.startsWith('"')) score++;
    if (acc[slot].bonus) score++;

    acc[slot].score = score;
    return acc;
  }, {});
}

function findItemType(item, parts) {
  const hasPart = (part) => item.includes(part);
  const weapon = parts.weapons.filter(hasPart)[0];
  if (weapon) return weapon;
  const chest = parts.chestArmor.filter(hasPart)[0];
  if (chest) return chest;
  const head = parts.headArmor.filter(hasPart)[0];
  if (head) return head;
  const waist = parts.waistArmor.filter(hasPart)[0];
  if (waist) return waist;
  const foot = parts.footArmor.filter(hasPart)[0];
  if (foot) return foot;
  const hand = parts.handArmor.filter(hasPart)[0];
  if (hand) return hand;
  const necklace = parts.necklaces.filter(hasPart)[0];
  if (necklace) return necklace;
  const ring = parts.rings.filter(hasPart)[0];
  if (ring) return ring;
}

// Output items
fs.writeFileSync("src/data/rare.json", JSON.stringify(rareUpdate, null, 2));
fs.writeFileSync("src/data/items.json", JSON.stringify(items, null, 2));
fs.writeFileSync(
  "src/data/loot-parts.json",
  JSON.stringify(itemParts, null, 2)
);
