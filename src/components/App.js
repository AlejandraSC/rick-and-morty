import '../stylesheets/app.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch, Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Loading from './Loading';
import mortyRunning from '../images/mortyRunning.png';
import notFoundCharacter from '../images/notFoundCharacter.png';

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
      return (
        <Link to="/">
          <p>Back to main page</p>
          <button className="detail__button">
            <img src={mortyRunning} alt="Back to main page" className="img__btn-back" />
          </button>
        </Link>
      );
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
