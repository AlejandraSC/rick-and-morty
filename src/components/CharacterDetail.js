import '../stylesheets/characterDetail.scss';
import { Link } from 'react-router-dom';
import mortyRunning from '../images/mortyRunning.png';

const CharacterDetail = (props) => {
  const getStatus = () => (props.user.status === 'Alive' ? 'Alive 🤺' : props.user.status === 'Dead' ? '💀' : 'Unknown 🤷🏻‍♀️');

  return (
    <section>
      <div className="detail">
        <img src={props.user.image} alt={props.user.name} className="detail__image"></img>
        <div className="detail__characterInfo">
          <h1 className="detail__name">{props.user.name}</h1>
          <div>
            <p className="detail__info">
              Status: <span>{getStatus()}</span>
            </p>
            <p className="detail__info">
              Specie: <span>{props.user.species}</span>
            </p>
            <p className="detail__info">
              Origin: <span>{props.user.origin}</span>
            </p>
            <p className="detail__info">
              Episodes: <span>{props.user.episodes}</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="detail__button">
          <img src={mortyRunning} alt="Back to main page" className="img__btn-back" />
          Back to main page
        </button>
      </Link>
    </section>
  );
};

export default CharacterDetail;
