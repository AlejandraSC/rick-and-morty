import '../stylesheets/filters.scss';

const Filters = (props) => {
  const handleChange = (ev) => {
    //console.log(ev.type, ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="form__Text">
      <label className="form__label display block" htmlFor="name"></label>
      <input className="form__input-text" type="text" name="name" id="name" placeholder="What character are you looking for? " value={props.nameFilter} onChange={handleChange} />
    </form>
  );
};

export default Filters;
