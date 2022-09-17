import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
const Card2 = (props) => {  
  const {pnum}=props
    return (
        <MetricCard
        title='Treated Patients'
        fetching={false}
        cardClick={true}
        value={pnum}
        trend={{
          slope:1,
          description: 'This Week',
        
        }}
      icon={<AccessibilityNewIcon />} 
      iconColor='black'
      iconBgColor='lightBlue'
    />
    );
  
}
export default Card2;