type Rarity = 1 | 2 | 3 | 4 | 5 | 6;

type Bag = {
  id: String
  minted: String
  currentOwner: Wallet
  weapon: String
  chest: String
  head: String
  waist: String
  foot: String
  hand: String
  neck: String
  ring: String
  items: Item[]
}

type ItemSlots = {
  weapon: String
  chest: String
  head: String
  waist: String
  foot: String
  hand: String
  neck: String
  ring: String
}

type Item = {
  slot: String
  name: String
  item: String
  suffix?: String
  namePrefix?: String
  nameSuffix?: String
  bonus: Boolean
  rarity: Rarity
}

type Wallet = {
  id: String
  address: String
  bags: [Bag]
  bagsHeld: BigInt
  joined: BigInt
}

type Transfer = {
  id: ID!
  bag: Bag!
  from: Wallet!
  to: Wallet!
  txHash: String!
  timestamp: BigInt!
}
