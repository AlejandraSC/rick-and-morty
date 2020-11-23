import '../stylesheets/app.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setUsers(data);
      //console.log(data);
    });
  }, []);

  //Event Handlers
  const handleFilter = (data) => {
    console.log('Manejando los filtros', data);
    if (data.key === 'name') {
      setNameFilter(data.value);
    }
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <>
      <div>
        <Header />
        <Filters handleFilter={handleFilter} />
        <CharacterList users={filteredUsers} />
        <CharacterDetail />
      </div>
    </>
  );
};

export default App;
