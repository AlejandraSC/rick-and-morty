import '../stylesheets/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return <CharacterCard key={user.id} user={user} />;
  });

  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};

export default CharacterList;
