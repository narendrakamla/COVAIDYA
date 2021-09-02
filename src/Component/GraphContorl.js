import axios from 'axios';

import React from 'react';
import Chart from "react-google-charts";
import  './Codata.css'
import Connecthis from './Connecthis';
import {BeatLoader} from 'react-spinners'

class GraphContorl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  pos:{},his:[]};
    }

    componentDidMount()
    {
    Connecthis.Connecthistory().then((res1)=>{  this.setState({pos:res1});this.setState({his:res1.data})});
     
    }
    render() {
      var ar=[ [
      'date' ,
        'Total Cases',
        'Deaths',
      ]]

      // this.state.his.map((dt)=>{this.setState(pre=>{dat:pre.dat.push([new Date(dt.lastUpdatedAtApify.slice(0,10)),parseInt(dt.totalCases),parseInt(dt.deaths)])})});
      
      this.state.his.map(dt=>(ar.push([new Date(dt.lastUpdatedAtApify.slice(0,10)),parseInt(dt.totalCases),parseInt(dt.deaths)])));
      console.log(ar);
    //  console.log(this.state.dat);
        // this.state.his.map(dt=>{console.log(dt)})
        // const data={    
        //     labels:['Jan','Feb',"",'Mar','Apr','May'],
        //     datasets:[
        //         {
        //             label:'Sales',
        //             data:[3,2,6,3.1,3.5,4.6,1.23,5]
        //         }
        //     ]

            
        // }
        // var c=(this.state.his)[0];
      var c="2020-03-30T05:15:00.000Z";
      c=c.slice(0,10);

    if(ar.length==1)
    {
    return<div class="spinner"> <h3>Loading Graph </h3><BeatLoader loading/></div>
    }
        else{
        // this.state.his.map((data)=>{ console.log(data[1].activeCases)})
        return (
         
            <>
    
<div className="graph" style={{ display: 'flex' }}>

<Chart
  width={'100'}
  height={'500'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={
  ar
    }
    
 
  options={{
    chart: {
      title:
        'Coornavirus cases  in India',
        titleFontSize:30
    },
    width: 900,
    height: 500,
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        
        Cases: { label: 'Total coronavirus cases' },
      
      },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
</div></>
        //     <div>
        //        <Line data={data} height ={400}
        // width={600}
        // options ={{animationEnabled: true,
		// 	theme: "light2",maintainAspectRatio:false,elements: {
        //     line: {
        //         tension: 0.2     // disables bezier curves
        //     }
        // }, scales: {
        //     y: {
        //         suggestedMin: 50,
        //         suggestedMax: 100
        //     }
        // }}} />
        //     </div>
        );
    }
  }
}




export default GraphContorl;
