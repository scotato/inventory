type Bag = {
  chest: String
  foot: String
  hand: String
  head: String
  id: String
  minted: String
  neck: String
  ring: String
  currentOwner: Wallet
}

type ItemSlots = {
  chest: String
  foot: String
  hand: String
  head: String
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
