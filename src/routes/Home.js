import React from 'react'; //이게 있어야 JXS가 인식함.
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({ movies: movies }); 키와 대입할 변수의 이름이 같으면 아래와 같이 축약할 수 있음!
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              // console.log(movie);
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                genres={movie.genres}
              />
            ))}
          </ div>
        )}
      </ section>
    );
  }
}

export default Home;
