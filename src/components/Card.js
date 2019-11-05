import React from 'react';

export default class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            showDescription : true,
        }
    }

    render() {

        const { showDescription } = this.state;
        const { title, background, date, rating, votes, description } = this.props;

        return (<div className="card">
                <div className="card__image"
                     style={{
                         backgroundImage : `url(${background})`
                     }}/>
                <div className="card__title">
                    {title}
                </div>

                <div className="card__like">
                    <i className="fa fa-heart-o"/>
                </div>

                <div className="card__subtitle">
                    <span>{date}</span>
                    <span>{rating} {votes}</span>
                </div>

                <div className="card-info">
                    <div className="card-info__header">Summary</div>
                    <button onClick={() => { this.setState( { showDescription : !showDescription})}}> Toggle </button>
                    <div className="card-info__description">
                        {showDescription ? description : null}
                    </div>
                </div>
            </div>
        )
    }


}

