import React from 'react';
import ReactDOM from 'react-dom';




class SearchForm extends React.Component {
    render() {
        return <form>
            <input type="text"/>
        </form>
    }
}

class WeatherApp extends React.Component {
    render() {
        return (<div>
            <SearchForm/>
        </div>);
    }
}

ReactDOM.render(<WeatherApp/>, document.getElementById('weather-app'));

