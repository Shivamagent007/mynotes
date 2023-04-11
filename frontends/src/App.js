import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import test from './pages/test';
import { BrowserRouter as Router, Switch,
         Route,
         Link,
 } from 'react-router-dom';
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Link to='/'>Home</Link>
          <Link to='/test'>Test</Link>

          <Switch>
            <Route path="/" exact component={NotesListPage} />
            <Route path="/note/:id" component={NotePage} />
            <Route path="/test" component={test} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
