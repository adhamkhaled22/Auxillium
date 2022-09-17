import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {json} from './AdSurvDIS';
import axios from "axios"
const MySurvey3=(prop)=>{
    var result="";
    function sendDataToServer(survey) {
        console.log("data: " + JSON.stringify(survey.data));
        
        axios.post('http://127.0.0.1/:5000/Discharge',{data : survey.data}).then(res=>{localStorage.setItem("results", res.data) });
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
export default MySurvey3;