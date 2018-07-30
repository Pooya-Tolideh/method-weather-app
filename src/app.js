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
    constructor (props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            query: "hello"
        }
    }

    handleKeyPress = (e) => {
        e.persist();
        this.setState(prevState => {
            return {
                query: e.target.value.toLowerCase()
            }
        })
    }

    render() {
        return <form>
            <input type="text" id="search-city" placeholder="Search for a city" onKeyUp={this.handleKeyPress}/>
            <p>{this.state.query}</p>
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

