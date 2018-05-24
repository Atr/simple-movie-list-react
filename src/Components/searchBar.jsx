//refactor for functional stateless!

var SearchBar = (props) => (
  <div>
    <label>
      Search for a movie:
      <input type="text" onChange={props.handleSearchChange} />
    </label>
    <input type="submit" onClick={props.handleSearchSubmit} />
  </div>
)

window.SearchBar = SearchBar;