class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentSearch : ''
    }
  }

  render() {

    return (
      <div id="movie-list-container">
      	<div id="title-bar">
        	<h3> MovieList </h3>
        </div>
        <div id="body-container">
          {this.props.data.map(movie => {
            return <MovieListEntry mov={movie}/>
          })}
        </div>
      </div>
    )
  }
};

window.App = App;