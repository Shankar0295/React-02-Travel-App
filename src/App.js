import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'
import Description from './components/Description/Description'
import './index.css';

function App() {
  // For routing components
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:id" component={Description}></Route>
      </Switch>
    </Router>
  );
}

export default App;
