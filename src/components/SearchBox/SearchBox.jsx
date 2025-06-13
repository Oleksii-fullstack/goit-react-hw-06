import s from "./SearchBox.module.css";

const SearchBox = ({ handleChangeFilter }) => {
  return (
    <label className={s.label}>
      <div className={s.labelName}>Find contacts by name</div>
      <input
        className={s.input}
        placeholder="type to search"
        onChange={(e) => handleChangeFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
