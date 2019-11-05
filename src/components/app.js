import React from 'react';
import Card from "./Card";
import axios from 'axios';
import {endpoints} from '../config';
import {getImageUrl} from '../config';
import Genres from "./Genres";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [],
            genres: [],
            activeGenreId: 0
        };

    }

    componentDidMount() {
        axios.get(
            endpoints.mostPopularMovies())
            .then(data => {
                //console.log(data.data.results);
                this.setState({
                    list: data.data.results
                })
            });

        axios.get(
            endpoints.genres())
            .then(data => {
                console.log(data.data.genres);
                this.setState({
                        genres: data.data.genres
                    }
                )
            });
    };

    getMoviesByGenre = genreId => {
        axios.get(endpoints.genreMovies(genreId)).then(data => {
            this.setState({
                list: data.data.results,
                activeGenreId: genreId
            });
        });
    };

    render() {
        return (
            <div>{this.state.genres.map((genre) => (
                <Genres
                    id={genre.id}
                    name={genre.name}
                    getMoviesByGenre={this.getMoviesByGenre}
                    activeId={this.state.activeGenreId}/>
            ))}

                {this.state.list.map((card) => (
                    <Card
                        background={getImageUrl(card.backdrop_path)}
                        date={card.release_date}
                        rating={card.vote_average}
                        votes={card.vote_count}
                        description={card.overview}
                        title={card.original_title}/>
                ))}
            </div>
        )
    }

}

export default App;