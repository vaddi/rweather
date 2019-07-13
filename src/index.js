import React from 'react';
import ReactDOM from 'react-dom';

// import components example
import { OpenWeather } from './components/OpenWeather';

const appName = 'rweather';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{appName}</h1>
        <OpenWeather locationID="3221017" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

