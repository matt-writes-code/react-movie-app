import Movie from './movie';

class App extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('h1', {}, 'React Movie App'),
      React.createElement(Movie, {
        name: 'Aquaman',
        releaseDate: '2018-12-07'
      }),
      React.createElement(Movie, {
        name: 'Bumblebee',
        releaseDate: '2018-12-15'
      }),
      React.createElement(Movie, {
        name: 'Fantastic Beasts: The Crimes of Grindelwald',
        releaseDate: '2018-11-14'
      })
    ]);
  }
}

export default App;
