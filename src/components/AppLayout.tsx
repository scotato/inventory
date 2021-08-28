const style = {
  margin: "0 auto",
  padding: 64,
  maxWidth: 1800,
};

function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <div style={style} className="app-layout">
      {children}
    </div>
  );
}

export default AppLayout;
