import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Createuser from '../Createuser';
import {BrowserRouter as Router,useHistory} from 'react-router-dom'
class Codata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Email:'',Password:'' ,nEmail:'',nPassword:'',nfirstname:'',nlastName:'',nNumber:null};
        this.getLemail=React.createRef();
         this.getLpassword=React.createRef();
         this.getSemail=React.createRef();
         this.getSpassword=React.createRef();
         this.getSnumber=React.createRef();
         this.getSfirsname=React.createRef();
         this.getSlastname=React.createRef();
         
    }

   saveUser=(e)=>
   {
     e.preventDefault();

     let user={emailId:this.state.nEmail,firstName:this.state.nfirstname,lastName:this.state.nlastName,password:this.state.nPassword,number:this.state.nNumber};
    console.log("json data=",JSON.stringify(user))
   Createuser.createAccount(user).then((res)=>{ 
       });
 

   }
    Lemail=(event)=>
    {
      this.setState({Email:event.target.value});
     
    }
    Lpassword=(event)=>
    {
      this.setState({Password:event.target.value});
    }
Semail=(event)=>
{
  this.setState({nEmail:event.target.value});
}
Spassword=(event)=>
{
  this.setState({nPassword:event.target.value});
}
Sfirstname=(event)=>
{
  this.getSfirsname.current=event.target.value;
  this.setState({nfirstname:event.target.value});
}
checkMail=(e)=>
{
  e.preventDefault();
 

    let c;
    var s;
    Createuser.getById(this.state.nEmail).then((res)=>{if(res.status==200)
    {
      document.getElementById("sEmailCheck").style.visibility="visible";
    }
  else
{
  document.getElementById("sEmailCheck").style.visibility="hidden";  
}});

   if(this.state.nfirstname.length==0)
{
  document.getElementById("sFirstnameCheck").style.visibility="visible";
}
else
{
  document.getElementById("sFirstnameCheck").style.visibility="hidden";  
}
if(this.state.nlastName.length==0)
{
  document.getElementById("sLastnameCheck").style.visibility="visible";
}
else
{
  document.getElementById("sLastnameCheck").style.visibility="hidden";  
}

if(this.state.nNumber==null)
{
  document.getElementById("sNumberCheck").style.visibility="visible";
}
else
{
  document.getElementById("sNumberCheck").style.visibility="hidden";  
}
}
 

Loggin=()=>
{
  Createuser.getById(this.state.Email).then(res=>{if(res.data.password==this.state.Password){
    alert("Login");
  

}
else
{
  alert("wrong login detail");
}
  
  }
 
  )

}
Slastname=(event)=>
{
  
 console.log(this.getSfirsname);
if(this.getSfirsname.current.length==0)
{
document.getElementById("exampleInputfirst").style ="red";
}
  this.setState({nlastName:event.target.value});
}
Snumber=(event)=>
{
  this.setState({nNumber:event.target.value});
}

    render() {
    
      console.log(this.state.nPassword," ",this.state.nEmail," ",this.state.nfirstname," ",this.state.nlastName,this.state.nNumber);
        return (<>
            <div class="modal fade" id="loginModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="loginModalLabel">LogIn to Co-Vaidya</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.Email} ref={this.getLemail} onChange={this.Lemail} aria-describedby="emailHelp"/>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" value={this.state.Password} ref={this.getLpassword} onChange={this.Lpassword} id="exampleInputPassword1"/>
                    </div>
        
                    <button type="submit" class="btn btn-primary" onClick={this.Loggin} >Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal fade" id="signupModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="SignModalLabel">Sign up to Co-Vaidya</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form  >
                     
                  <div class="mb-3">
                      <label for="sexampleInputEmail1" class="form-label" >Email address</label><label id="sEmailCheck" style={{visibility:"hidden",color:"red"}}>Email is already in  used</label>
                      <input type="email" class="form-control" ref={this.getSemail} onChange={this.Semail} value={this.state.nEmail}id="sexampleInputEmail1" aria-describedby="emailHelp" required/>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                  <div class="mb-3">

                      <label for="exampleInputfirst" class="form-label">First Name</label><label id="sFirstnameCheck" style={{visibility:"hidden",color:"red"}}>Invalid!</label>
                      <input type="text" class="form-control"ref={this.getSfirstname}onClick={this.checkMail}onChange={this.checkMail} onChange={this.Sfirstname} value={this.state.nfirstname} id="exampleInputfirst" required/>
                    </div>
                     
                    <div class="mb-3">
                      <label for="exampleInputlast"class="form-label"> LastName</label><label id="sLastnameCheck" style={{visibility:"hidden",color:"red"}}>Invalid!</label>
                      <input type="text" class="form-control"  ref={this.getSlastname} onChange={this.Slastname}value={this.state.nlastName}  id="exampleInputlast" required/>
                    </div>
                   
                    <div class="mb-3">
                      <label for="sexampleInputPassword1" value ={this.state.nPassword}class="form-label"> Password</label><label id="sPasswordCheck" style={{visibility:"hidden",color:"red"}}>Invalid!</label>
                      <input type="password" class="form-control"   ref ={this.getSpassword} onChange={this.Spassword}id="sexampleInputPassword1" required/>
                    </div>
                    
                    
                    <div class="mb-3">
                      <label for="sexampleInputMobile" class="form-label"> Mobile Number</label><label id="sNumberCheck" style={{visibility:"hidden",color:"red"}}>Invalid!</label>
                      <input type="Number" class="form-control" ref={this.getSnumber} onChange={this.Snumber} value={this.state.nNumber} id="sexampleInputMobile" required/>
                    </div>
                    <button type="submit" onClick={this.saveUser} class="btn btn-primary"  data-bs-dismiss="modal">Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
          
{/*           
          <div class="modal fade" id="signModal"  aria-labelledby="signModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="signModalLabel">LogIn to Co-Vaidya</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail12" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail12" aria-describedby="emailHelp1"/>
                      <div id="emailHelp1" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword12" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword12"/>
                    </div>
        
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
           */}
   </>
        );
    }
}



export default withRouter(Codata);
