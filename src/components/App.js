import '../stylesheets/app.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const App = () => {
  //state
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  //api
  useEffect(() => {
    getDataFromApi().then((data) => {
      setUsers(data);
      //console.log(data);
    });
  }, []);

  //events
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    }
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const getUsers = users.find((user) => {
      return routeCharacterId === user.id;
    });
    if (getUsers == null) {
      return <p>No existe este personaje</p>;
    } else {
      return <CharacterDetail user={getUsers} />;
    }
  };

  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} />
            <CharacterList users={filteredUsers} />
          </Route>
          <Route path="/character/:characterId" component={renderDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
