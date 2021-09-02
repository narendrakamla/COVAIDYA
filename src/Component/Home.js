import React from 'react';

import './home.css'
import StateCo from './StateCo';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <>
                 <section>
    <div class="main_header">
      <div class="row w-100 h-100">

        <div class="col-lg-6 col-md-6 col-12 order-lg-1 order-2">
          <div class="leftside w-100 h-100 d-flex justify-content-center align-items-center">

            <img src="images/couni.png" alt="couni" width="600" height="200"/>
          </div>

        </div>

        <div class="col-lg-6 col-md-6 col-12 order-lg-2 order-1">
          <div class="rightside w-100 h-100 d-flex justify-content-center align-items-center">

            <h1>Let's Stay Safe & Fight Together Against Cor<span class="rotate"> <img src="images/coronaa.png" alt="corona" width="100px"
                  height="90px"/> </span>na Virus</h1>

          </div>

        </div>
      </div>
    </div>

  </section>
  
  <StateCo/>
            </>
        );
    }
}



export default Home;
