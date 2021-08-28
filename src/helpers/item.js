import parts from "../data/item-parts.json";
const { suffixes, namePrefixes, nameSuffixes } = parts;

export function parseItemParts(item) {
  return Object.keys(item).reduce((acc, slot) => {
    const name = item[slot];
    acc[slot] = {
      slot,
      name,
      item: findItemType(name, parts),
      suffix: suffixes.find((suffix) => name.includes(suffix)) || null,
      namePrefix: namePrefixes.find((prefix) => name.includes(prefix)) || null,
      nameSuffix: nameSuffixes.find((suffix) => name.includes(suffix)) || null,
      bonus: name.includes("+1"),
    };
    let score = 1;
    if (acc[slot].suffix) score++;
    if (acc[slot].namePrefix) score++;
    if (acc[slot].nameSuffix) score++;
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
