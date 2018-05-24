//refactor for functional stateless!

var SearchBar = (props) => {
  console.log(props);

  return (
  <div>
    <label>
      Search for a movie:
      <input type="text" onChange={props.handleSearchChange} />
    </label>
    <input type="submit" onClick={props.handleSearchSubmit} />
  </div>
  )
}

/*
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    //alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.filterMoviesBySearch(this.state.value);

    //helpful console logs:
    // console.log(this.props);
    // console.log(this.state.value);
    // // //console.log(event.target);
    //console.log(event.target.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="ifMultipleInputFieldsPutNameInInputField">
        <label>
          Search for a movie:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" name="test123" />
      </form>
    );
  }
}
*/

window.SearchBar = SearchBar;