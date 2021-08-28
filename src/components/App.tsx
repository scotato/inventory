import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from '../components/AppLayout'
import HomePage from '../pages/HomePage'
import WalletPage from '../pages/WalletPage'

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path={`/adventurer/:address`}>
            <WalletPage />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
