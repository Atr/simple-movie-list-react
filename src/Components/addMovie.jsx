//refactor for functional stateless!

class AddMovie extends React.Component {
	constructor (props) {
    super (props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value : ''
    }
  }

  handleChange (event) {
    this.setState({
      value : event.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log('event has occured!  event below:');
    console.log(event);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Add Movie:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

window.AddMovie = AddMovie;