import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Card3 = (props) => {  
  const {pnum}=props
    return (
        <MetricCard
        title='Patients in ED'
        fetching={false}
        cardClick={true}
        value={pnum}
        trend={{
          slope:1,
          description: 'New This week',
        
        }}
        icon={<LocalHospitalIcon /> }
        iconColor='black'
        iconBgColor='lightBlue'
    />
    );
  
}
export default Card3;