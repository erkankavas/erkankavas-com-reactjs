import React, { Component } from 'react';
import './App.css';

class JsonList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.erkankavas.com/last')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div className='main'>
        <h1>Latest News</h1>
        <ul>
          {this.state.data.map((item) => (
            <li key={item.id}><a href={"https://www.erkankavas.com/makale/" +item.url+"/"} target="_blank" rel="noreferrer">{item.title}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JsonList;
