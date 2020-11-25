import '../stylesheets/app.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import getDataFromApi from '../services/getDataFromApi';
import CharacterDetail from './CharacterDetail';
import Loading from './Loading';
import notFoundCharacter from '../images/notFoundCharacter.png';
import { Route, Switch, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  filteredUsers.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);

    const getUsers = users.find((user) => {
      return routeCharacterId === user.id;
    });
    if (getUsers == null) {
      return (
        <Link to="/">
          <div className="notfound__Container1">
            <p className="notFound__text1">There is no result for this search. Please click here to go back! </p>
            <img src={notFoundCharacter} alt="Sorry" className="notFound__img1"></img>
          </div>
        </Link>
      );
    } else {
      return <CharacterDetail user={getUsers} />;
    }
  };
  //console.log(isLoading);

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
