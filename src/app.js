import React from 'react';
import ReactDOM from 'react-dom';








const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    );
};

Header.defaultProps = {
    title: 'Method Weather Network',
    subtitle: 'Get the latest weather info'
};




class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit (e) {
        e.persist();
        console.log(e.target.elements.searchQ)   
        this.props.getSearch(e.target.value);
    }

    render () {
        return (<form onSubmit={onFormSubmit}>
            <input type="text" id="search-city" placeholder="Search for a city" name="searchQ"/>
        </form>
        );
    }

}

const Result = (props) => {
    return (
        <div>
            <h3>City: {props.cityName}</h3>
        </div>
    ) ; 
};


class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        }
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }

    getJSON () {
        return fetch('api.openweathermap.org/data/2.5/weather?q=London')
                .then(response => {
                    if (response.status === 200) {
                    return response.json( )
                    } else { throw Error('url not found')}
                })
                .then (data => console.log(data))
                .catch(err => console.error(err))
    }

    componentDidMount () {
        this.getJSON();
    }

    handleSearchQuery(city) {
        if (city) {
            this.setState( prevState => {
                return { city }
            });
            console.log(this.state);
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <SearchForm getSearch={this.handleSearchQuery}/>
                <Result cityName={this.state.city}/>
            </div>
        );
    }
}

ReactDOM.render(<WeatherApp/>, document.getElementById('weather-app'));

