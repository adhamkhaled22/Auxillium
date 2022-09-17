import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const Card4 = (props) => {  
  const {pnum}=props
    return (
        <MetricCard
        title='Number of Visits'
        fetching={false}
        cardClick={true}
        value={pnum}
        trend={{
          slope:1,
          description: 'New This week',
        
        }}
        
        icon={<SupervisorAccountIcon /> }
        iconColor='black'
        iconBgColor='lightBlue'
    />
    );
  
}
export default Card4;