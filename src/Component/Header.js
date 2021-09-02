import './Header.css';
import Formhandle from'./Formhandle';
import Codata from './Codata';
import {BrowserRouter as Router,useHistory} from 'react-router-dom'
function Header()
{
   const history=useHistory();
   const goAbout=()=>
   {
     history.push('/about');
   }
   const goHome=()=>
   {
     history.push('/home');
   }
   const goShop=()=>
   {
     history.push('/shop');
   }
   const goContact=()=>
   {
     history.push('/contact');
   }
   const goNear=()=>
   {
     history.push('/nearhospital');
   }
    return (<>
    <nav class="navbar navbar-expand-lg nav_style" style={{height:"45px" ,position:"fixed",width:'    100%'}}>
    <div class="container-fluid">
      <a class="navbar-brand " href="#" style={{"max-width": "10%"}}>
        <img src="images/logo2.png" class="img-fluid"/>
      </a>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2 ">
            <a class="nav-link active" aria-current="page" type="button" onClick={goHome}>Home</a>
          </li>

          <li class="nav-item dropdown mx-2">
            <a class="nav-link dropdown-toggle " data-toggle="dropdown" type="button" onClick={goAbout} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" style={{color:"#42c17bba"}} href="#Precaution">Precaution</a></li>
              <li><a class="dropdown-item" style={{color:"#42c17bba"}} href="#Symptom">Symptom</a></li>
         
              <li><a class="dropdown-item"style={{color:"#42c17bba"}}  href="#Treatment">Treatment</a></li>
            </ul>
          </li>
    
          <li class="nav-item mx-2">
            <a type="button" class="nav-link" type="button" onClick={goShop}>Shop Equipments</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link"  onClick={goNear} type="button">Nearest Hospital</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" onClick={goContact} type="button">Contact Us</a>
          </li>
        </ul>

<Formhandle />
        <div class="ms-4">
          <button class="btn btn-light btn-sm btn-primary "  data-bs-toggle="modal" data-bs-target="#loginModal"
       >Sign in</button>
        </div>
        <div class="ms-4">
          <button class="btn  btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</button>
        </div>
      </div>
    </div>
  </nav>
  <Codata/>
    </>);
}
export default Header;