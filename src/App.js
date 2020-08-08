import React from 'react';
import { Cards, CountryPicker, Chart }  from './components';
import { fetchData } from './api/';
import './App.css';
import Header from './components/Header';
import Piechart from '../src/components/PieChart/Piechart.js'

import image from './images/image.png';
import { Grid } from '@material-ui/core';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
      <Header/>
          <Grid item xs={12}>
        <img className='image' src={image} alt="COVID-19" style={{marginLeft:'38%'}}/>
        </Grid>
        <h1 align='center'>Global and Country Covid-19 Statistics</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <div style={{marginLeft:'800px',marginTop:'-350px'}}>
        <Piechart data={data} />
        </div>
        <Chart data={data} country={country} /> 
            
      </div>
    );
  }
}

export default App;