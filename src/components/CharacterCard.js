import '../stylesheets/characterCard.scss';

const CharacterCard = (props) => {
  //console.log(props.user);

  return (
    <li className="card">
      <img className="card__img" src={props.user.image} alt={`Foto de ${props.user.name}`} title={`Foto de ${props.user.name}`} />
      <h4 className="card__name">{props.user.name}</h4>
      <p className="card__specie">{props.user.species}</p>
    </li>
  );
};

export default CharacterCard;
