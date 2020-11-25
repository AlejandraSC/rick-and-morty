import '../stylesheets/characterList.scss';
import CharacterCard from './CharacterCard';
import notFoundCharacter from '../images/notFoundCharacter.png';

const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return <CharacterCard key={user.id} user={user} />;
  });

  return (
    <section>
      <ul className="cards">{userElements}</ul>
      <div className="container">
        {props.users.length === 0 && (
          <div className="urlNotFound__container">
            <p className="urlNotFound__text">There is no result for this search, please try again! </p>
            <img src={notFoundCharacter} alt="Sorry" className="notFound__img"></img>
          </div>
        )}
      </div>
    </section>
  );
};

export default CharacterList;
