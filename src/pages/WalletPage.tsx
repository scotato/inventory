import { useParams } from "react-router-dom"
import useWallet from '../hooks/use-wallet'

interface WalletPageParams {
  address: string
}

const style = {}

function WalletPage() {
  const { address } = useParams<WalletPageParams>();
  const { data, loading, error } = useWallet(address)

  if (error) return (
    <pre style={style}>{JSON.stringify(error, null, 2)}</pre>
  )

  if (loading) return (
    <div style={style}>loading...</div>
  )

  return (
    <div style={style}>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </div>
  );
}

export default WalletPage;
