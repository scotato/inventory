import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import WalletPage from '../pages/WalletPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path={`/adventurer/:address`}>
          <WalletPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
