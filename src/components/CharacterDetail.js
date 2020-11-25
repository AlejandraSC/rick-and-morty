import '../stylesheets/characterDetail.scss';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const getStatus = () => (props.user.status === 'Alive' ? 'Alive 🤺' : props.user.status === 'Dead' ? '💀' : 'Unknown 👻');

  return (
    <>
      <section className="modal__Container">
        <div className="detail__infoContainer">
          <img src={props.user.image} alt={props.user.name} className="detail__image"></img>
          <h1 className="detail__name">{props.user.name}</h1>
          <p className="character__details">
            Status: <span className="answer__details">{getStatus()}</span>
          </p>
          <p className="character__details">
            Specie: <span className="answer__details">{props.user.species}</span>
          </p>
          <p className="character__details">
            Origin: <span className="answer__details">{props.user.origin}</span>
          </p>
          <p className="character__details">
            Episodes: <span className="answer__details">{props.user.episodes}</span>
          </p>
          <Link to="/">
            <input className="btn__goBack" type="button" value="Go back" />
          </Link>
        </div>
      </section>
    </>
  );
};

CharacterDetail.propTypes = {
  status: Proptypes.string,
  name: Proptypes.string,
  species: Proptypes.string,
  origin: Proptypes.string,
  episodes: Proptypes.string,
};

export default CharacterDetail;
