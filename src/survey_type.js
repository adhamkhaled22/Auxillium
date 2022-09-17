import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {json} from './AdSurv2';
import axios from "axios"
const MySurvey=(prop)=>{
    var result="";
    function sendDataToServer(survey) {
        console.log("data: " + JSON.stringify(survey.data));
        
        axios.post('http://127.0.0.1/esi:5000',{data : survey.data}).then(res=>{localStorage.setItem("results", res.data) });
        //this.setState({iscompleted:true});
        
        localStorage.setItem("Survey",survey.data)
    }
    return(
        <Survey.Survey
        showCompletedPage={false}
        //onComplete={data=>localStorage.setItem("Survey",data)} 
        onComplete={data=>prop.showCompletedPage(data.valuesHash)}
        json={json}

        />
    )
}
export default MySurvey;