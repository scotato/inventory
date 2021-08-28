import { useState, useEffect } from "react";
import { request, gql } from 'graphql-request'

const SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/shahruz/loot'

const bagsQuery = gql`
  {
    bags(first: 10, orderBy: minted, orderDirection: asc) {
      id
      head
      neck
      chest
      hand
      ring
      weapon
      waist
      foot
      currentOwner {
        address
        bagsHeld
        joined
      }
      minted
    }
  }
`

type Bag = {
  chest: String
  foot: String
  hand: String
  head: String
  id: String
  minted: String
  neck: String
  ring: String
  currentOwner: Adventurer
}

type Adventurer = {
  address: String
  bagsHeld: String
  joined: String
}

type BagsQuery = {
  data: {
    bags?: Bag[]
  }
  loading: boolean
  error?: string
}

function useLoot (): BagsQuery {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    request(SUBGRAPH, bagsQuery)
      .then(setData)
      .then(stopLoading)
      .catch(setError)
  }, [])

  return { data, loading, error }
}

export default useLoot
