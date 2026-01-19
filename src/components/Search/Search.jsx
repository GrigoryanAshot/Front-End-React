function Search({ value, onChange, placeholder = '' }) {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
