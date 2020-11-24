import '../stylesheets/filters.scss';

const Filters = (props) => {
  const handleChange = (ev) => {
    //console.log(ev.type, ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <form>
      <label className="form__label display block" htmlFor="name"></label>
      <input className="form__input-text" type="text" name="name" id="name" onChange={handleChange} />
    </form>
  );
};

export default Filters;
