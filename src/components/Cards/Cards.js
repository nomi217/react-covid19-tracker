import React from 'react';
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './Card/Card';

import '../Cards/Cards.css';


// const styles = useStyles();


const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className="container">
      <Grid container spacing={4} justify="center">
        <CardComponent
          className="infected"
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
          />
        <CardComponent
          className="recovered"
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className="deaths"
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;