import useLoot from '../hooks/use-loot'

const style = {}

function LootList() {
  const { data, loading, error } = useLoot()
  console.log({ data, loading, error})

  if (error) return (
    <div style={style}>{error}</div>
  )

  if (loading) return (
    <div style={style}>loading...</div>
  )

  return (
    <pre style={style}>
      {JSON.stringify(data.bags, null, 2)}
    </pre>
  );
}

export default LootList;
