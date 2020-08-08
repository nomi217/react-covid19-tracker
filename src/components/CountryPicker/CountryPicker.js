import React, { useState, useEffect } from 'react';
import { Select, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import '../CountryPicker/CountryPicker.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className='formControl' style={{marginLeft:'5%',marginTop:'30px'}}>
      <Select native variant='outlined' defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Select>
    </FormControl>
  );
};

export default Countries;