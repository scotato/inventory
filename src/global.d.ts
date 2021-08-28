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
  score: number
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
