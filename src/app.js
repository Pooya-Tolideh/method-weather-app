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
    render() {
        return <form>
            <input type="text" id="search-city"/>
        </form>
    }
}

class WeatherApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SearchForm/>
            </div>
        );
    }
}

ReactDOM.render(<WeatherApp/>, document.getElementById('weather-app'));

