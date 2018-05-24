class App extends React.Component {
  constructor (props) {
    super(props);

    this.filterMoviesBySearch = this.filterMoviesBySearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.state = {
      currentSearch : '',
      allMovies : this.props.data,
      moviesToRender : this.props.data,
      movieToAdd : ''
    }
  }

  handleSearchChange(event) {
    //console.log('hSC has run');
    //console.log(event.target.value);
    this.setState({
      currentSearch: event.target.value
    });
    // console.log('current search is:');
    // console.log(this.state.currentSearch);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.filterMoviesBySearch(this.state.currentSearch);
  }

  filterMoviesBySearch (searchStr) {
    if (searchStr.length) {
      let lowCaseSearch = searchStr.toLowerCase();

      let filteredMovies = this.state.allMovies.filter(movie => {
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
          moviesToRender : [{title: 'Sorry, no movies match that search.'}]
        });
      }
    } else {
      this.setState({
        moviesToRender : this.state.allMovies
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
          <AddMovie />
        </div>
        <div id="search-bar">
          <SearchBar filterMoviesBySearch={this.filterMoviesBySearch} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit}/>
        </div>
        <div id="body-container">
          {this.state.moviesToRender.map(movie => {
            return <MovieListEntry mov={movie}/>
          })}
        </div>
      </div>
    );
  }
};

window.App = App;