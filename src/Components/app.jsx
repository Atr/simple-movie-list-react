class App extends React.Component {
  constructor (props) {
    super(props);

    this.filterMoviesBySearch = this.filterMoviesBySearch.bind(this);

    this.state = {
      currentSearch : '',
      moviesToRender : this.props.data
    }
  }

  filterMoviesBySearch (searchStr) {
    if (searchStr.length) {
      let lowCaseSearch = searchStr.toLowerCase();

      let filteredMovies = this.state.moviesToRender.filter(movie => {
        let lowCaseTitle = movie.title.toLowerCase();
        return lowCaseTitle.includes(lowCaseSearch);
      }); 

      if (filteredMovies.length) {
        this.setState ({
          moviesToRender : filteredMovies
        });
      } else {
        //this is hacky!
        this.setState ({
          moviesToRender : [{title: 'Sorry, no movies match that search!'}]
        });
      }
    } else {
      this.setState({
        moviesToRender : this.props.data
      });
    }
  }

  render() {
    return (
      <div id="movie-list-container">
      	<div id="title-bar">
        	<h3> MovieList </h3>
        </div>
        <div id="search-bar">
          <SearchBar filterMoviesBySearch={this.filterMoviesBySearch} />
        </div>
        <div id="body-container">
          {this.state.moviesToRender.map(movie => {
            return <MovieListEntry mov={movie}/>
          })}
        </div>
      </div>
    )
  }
};

window.App = App;