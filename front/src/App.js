import { HashRouter, Switch } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <HashRouter>
      <Switch>                
        <Routes/>
      </Switch>
    </HashRouter>
  );
}

export default App;
