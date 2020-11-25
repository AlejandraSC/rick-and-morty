import '../stylesheets/characterCard.scss';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  //console.log(props.user);
  return (
    <Link to={`/character/${props.user.id}`}>
      <li className="card">
        <img className="card__img" src={props.user.image} alt={`Foto de ${props.user.name}`} title={`Foto de ${props.user.name}`} />
        <h2 className="card__name">{props.user.name}</h2>
        <h4 className="card__species">{props.user.species}</h4>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  image: Proptypes.string,
  name: Proptypes.string,
  species: Proptypes.string,
};

export default CharacterCard;
