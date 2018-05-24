class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentSearch = '';
    }
  }

  render() {
    return (
      <div id="movie-list-container">
      	<div id="title-bar">
        	<h3> MovieList </h3>
        </div>
        <div id="body-container">
          {this.props.data.forEach(movie => {
            <MovieListEntry mov={movie}/>
          })}
          <div id="movie-list-entry"> {props.data[0].title} </div>
          <div id="movie-list-entry"> {props.data[1].title} </div>
          <div id="movie-list-entry"> {props.data[2].title} </div>
          <div id="movie-list-entry"> {props.data[3].title} </div>
          <div id="movie-list-entry"> {props.data[4].title} </div>
        </div>
      </div>
    )
  }
};

window.App = App;