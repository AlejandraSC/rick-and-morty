import '../stylesheets/app.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Loading from './Loading';

const App = () => {
  //state
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //api
  useEffect(() => {
    setIsLoading(true);
    getDataFromApi().then((data) => {
      setUsers(data);
      setIsLoading(false);
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
  console.log(isLoading);
  return (
    <>
      <div>
        {isLoading === true ? <Loading /> : null}
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} nameFilter={nameFilter} />
            <CharacterList users={filteredUsers} />
          </Route>
          <Route path="/character/:characterId" component={renderDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
