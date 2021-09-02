import React from 'react';
import Connectd1 from './Connectd1';
import GraphContorl from './GraphContorl';


class StateCo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
            cdata:[],
            tdata:{}
        };
    }
componentDidMount()
{
  
Connectd1.getConnect().then((res)=>{

this.setState({cdata:res.data.regionData,tdata:res.data});
});
    



}
    render() {
        return (
           <>
           <section class="updates">
    <div class="mb-5">
        <h3 class="text-center">Corona-Virus Cases in India</h3>
      </div>
      <div class="d-flex justify-content-around align-items-center">
        <div class="Count">
        <h1 style={{color: "red"}}>{this.state.tdata.totalCases}</h1>
        <p style={{color: "red"}}>Total Cases</p>
      </div >
      <div class="Count">
        <h1 style={{color: "blue"}}>{this.state.tdata.activeCases}</h1>
        <p style={{color: "blue"}}>Active Cases</p>
      </div>
      <div class="Count">
        <h1 style={{color: "green"}}>{this.state.tdata.recovered}</h1>
        <p style={{color: "green"}}> Recovered</p>
      </div>
      <div class="Count">
        <h1 style={{color: "grey"}}>{this.state.tdata.deaths}</h1>
        <p style={{color: "grey"}}>Deaths</p>
      </div>
    </div>
  </section>
    <section>
        <div class="container">
            <table class="table table-striped table-hover">
                
                    <tr>
                        <th scope="col">State/UT</th>
                        <th scope="col">Total Cases</th>
                        <th scope="col">Active Cases</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                    </tr>
                    
                    <tbody>
                        
                           {
                           this.state.cdata.map(cases=><tr key={cases.region}>
                                                            <td>{cases.region}</td>
                                                            <td>{cases.totalInfected}</td>
                                                            <td>{cases.activeCases}</td>
                                                            <td>{cases.recovered}</td>
                                                            <td>{cases.deceased}</td>
                                                            </tr>
                                                            )
                                                            }
                    </tbody>
               
 
        
            </table>
      
        </div>
        <div>
<GraphContorl/>
        </div>
        
  </section>
          </>
        );
    }
}



export default StateCo;
