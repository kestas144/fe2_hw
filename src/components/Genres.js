import React from 'react';

export default class Genres extends React.Component {

    render() {

        const {id, name, getMoviesByGenre, activeId} = this.props;

        return (
            <div className={"genre " + (activeId === id ? 'genre_inactive' : '')}>
                <li onClick={e => getMoviesByGenre(id)}>
                    {name}
                </li>
            </div>
        )
    }
}

