import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <section class="changes" style={{width:"100%",position:'absolute',left:'0',marginTop:'200px'}}>
   
   <footer class="bg-dark text-white text-center" >

     <div class="container p-4">

       <div class="row">
       
         <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <a href="index.html"> <img src="images/logo2.png" class="img-fluid mb-3" width="200px"></img></a>
 
           <h5>We stand with everyone fighting on the Frontlines</h5>
         </div>
        
         <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
           <h5 class="text-uppercase" >Links</h5>
 
           <ul class="list-unstyled mb-3">
             <li>
              HelpLine Email Address :<a href="ncov2019@gov.in" class="text-white underline">ncov2019@gov.in</a>
             </li>
             
           </ul>
         </div>
     
         <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
           <h5 class="text-uppercase mb-0">Helpline Number:</h5>
 
           <ul class="list-unstyled">
             <li>
                +91-11-23978046
             </li>
             <li>
                 1075 (Toll Free)
             </li>
           </ul>
         </div>
       
       </div>
       
     </div>
    
 
   
     <div class="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)}"}}>
       © 2021 Copyright: Co-Vaidya- All rights reserved
     </div>
     
   </footer>
 
 </section>
            </div>
        );
    }
}


export default Footer;
