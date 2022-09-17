import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
\
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
//class Card extends Component {
const Card = (props) => {  
    const {pnum}=props
    return (
      <MetricCard
          value={pnum}
         
          title='Number of Addmitions'
          fetching={false}
          cardClick={true}
          error={null}
          trend={{
            slope:1,
            description: 'New This week',
          
          }}
          icon={<PersonAddAlt1Icon /> }
          iconColor='black'
          iconBgColor='lightBlue'
      />
    );
  
}
export default Card;