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
