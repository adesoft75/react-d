import React, { Component } from 'react';
import AppHeader from './AppBar';
import AppDrawer from './Drawer';
import AppList from './List';
import Weather from './weather';

const apiKey = 'bcee491cb0b80434b89d93c958969e51'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {isDrawerOpen: false, temperature: undefined,
    itemsList: [
      {name: 'Элемент 1', description: 'Описание элемента 1', check: false},
      {name: 'Элемент 2', description: 'Описание элемента 2', check: false},
      {name: 'Элемент 3', description: 'Описание элемента 3', check: false},
      {name: 'Элемент 4', description: 'Описание элемента 4', check: false},
    ]}
  }

  getWeather = async (event) => {
    event.preventDefault()
    const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Perm&appid=${apiKey}&units=metric`)
    const data = await apiUrl.json()
    this.setState({temperature: data.main.temp})
  }

  render(){
  return (
    <div className="App">
      <AppHeader onMenuClick={() => this.setState({ isDrawerOpen: true })} />
      <AppDrawer
        open={this.state.isDrawerOpen}
        onMenuTableClick={() => {
          this.setState({ isDrawerOpen: false });
        }}
        onMenuGraphClick={() => {
          this.setState({ isDrawerOpen: false });
        }}
        onClose={() => {
          this.setState({ isDrawerOpen: false });
        }}
      />
      <AppList items={this.state.itemsList} />
      <Weather
        getW={this.getWeather}
        temperature={
          this.state.temperature > 0
            ? "+" + this.state.temperature
            : this.state.temperature
        }
      />
    </div>
  );
}
}
