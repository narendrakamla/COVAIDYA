import React from 'react';
import PropTypes from 'prop-types';
import './Near.css'
class NearHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {main:[],delhi:[{name:"Aruna Asaf Ali Govt. Hospital",address:"Rajpur Road,Delhi.110054",contact:"23965532,23831524 Fax-23922333"},{name:"	Acharyaashree Bhikshu Hospital",address:"Moti Nagar New Delhi-110015",contact:"25423011 Fax- 25448806"},{name:"Attar Sain Jain Hospital",address:"	Lawrence Road, New Delhi-110035",contact:"27153357 Fax- 27106441"},{name:"Baba Saheb Ambedkar Hospital",address:"Sector 6, Rohini, New Delhi.-110085",contact:" Delhi.-110085	27055585, Fax-27058108"},{name:"Bhagwan Mahavir Hospital",address:"PitamPura, Delhi-110034",contact:"27034535, Fax-27033948"}],Punjab:[{name:"Capitol Hospital",address:"NH-44, Jalandhar - Pathankot Road Near Reru, Chowk, Jalandhar, Punjab 144012",contact:"0181 236 6666"},{name:"RG Stone And Super Speciality Hospital",address:"510-L, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab 141002",contact:"098769 10000"},{name:"Arora Hospital",address:"Grand Trunk Rd, Opposite Chheharta Girls High School, Chheharta, Amritsar, Punjab 143001",contact:" 098145 23958"}]};
    }

    stateCheck=(event)=>
    {
       
if(event.target.value=='Punjab')
this.setState({main:this.state.Punjab})
else if(event.target.value=='Delhi')
{
this.setState({main:this.state.delhi})
}
    }
    render() {
        return (
           <div>
                  <div class="container-fluid pt-5 pb-5 " >
                      
        <h1 class="text-center" style={{top:"20"}}>Find hospital in your state</h1>
       <center>
        <div class="nav-item dropdown mx-2">
           <h3>Find Your State</h3>
            <select name="Find Youe State" onChange={this.stateCheck} id="State">
            <option value="Punjab">Punjab</option>
  <option value="Delhi">Delhi</option>
 
  
</select>
    
      </div>
      </center>
    </div>
    <section>
      <div class="container pt-5 pb-5">
            <table class=" table "  >
            
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                    </tr>
               
                 <tbody>
                    
                        {this.state.main.map((data)=><tr>{data.name}<td></td><td>{data.address}</td><td>{data.contact}</td></tr>)}
                   </tbody>
                    </table>
        </div></section>
                    
      </div>
            
        );
    }
}



export default NearHospital;
