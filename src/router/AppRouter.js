import React  from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
 
import AddCard from '../components/AddCard';
import CardList from '../components/CardList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditCard from '../components/EditCard';
import CardContext from '../context/CardContext';
 

const AppRouter = () => {
  const [list, setList] = useLocalStorage('cards', []);

  return (
    <main  className='container'> 
      <BrowserRouter>
      <div>
      
        <div>
          <CardContext.Provider value={{ list, setList }}>
            <Switch>
              <Route component={CardList} path="/" exact={true} />
              <Route component={AddCard} path="/add" />
              <Route component={EditCard} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CardContext.Provider>
        </div>
      </div> 
    </BrowserRouter>
    </main>
   
  );
};

export default AppRouter;
