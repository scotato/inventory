const style = {
  margin: '0 auto',
  padding: 64,
  maxWidth: 800
}

function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <div style={style}>
      { children }
    </div>
  );
}

export default AppLayout;
