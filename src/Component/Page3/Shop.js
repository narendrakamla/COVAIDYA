import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './Shop.css'

import Getitem from './Getitem';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cart:[] ,
        size:0 };
    }

   
    
   
    
goCart=(event)=>
{
    console.log(this.state.cart);
    
    this.props.history.push({pathname:'/cart',data:this.state.cart})
}
addCart=(event)=>
{
    let { cart,  size } = this.state;
    
     Getitem.addtoCart(event.target.id).then((res)=>{cart.push(res.data)});
     this.setState({cart:cart});
    this.setState((pre)=>({size:(pre.size)+1}));
   
    
}

    render() {
        return (
            <>
            <div class="container-fluid pt-5 pb-5">
                <div class=" text-center mb-5 mt-5">

                    <h1> Covid Store</h1>


                </div>
                <div class="wrapper" style={{position:"fixed", marginLeft:"80%"}}>
          	
                <div class="cart-nav" >
                        <div class="icon">
                            <i class="fas fa-shopping-cart"></i>
                            <a  id="16565" onClick={this.goCart} type="button"> Cart</a>
                        </div>
                        <div class="item-count">{this.state.size}</div>
                </div>
                </div>
         
                <div class="container-shop mb-5 mt-5">
        <div class="row">
           

            <div class="  col-md-3">
            

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/dmask.jpg" alt="" class="rounded" width="160"></img>
                  
                        <h5>Disposable Mask</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">3 Ply Disposable Surgical Face mask</span>

                        </div>
                        <div class="cost mt-3 text-dark">
                            <span>Rs.10</span>
                        </div>
                    </div>
                 
                    <div class="buttons mt-3">
                        <button id="20211"class="cart-btn" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/n95-mask.jpg" alt="" class="rounded" width="160"></img>

                        <h5>N-95 Mask</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Reusable Multilayered N-95 Face Mask</span>

                        </div>
                        <div class="watchcost mt-3 text-dark">
                            <span>Rs.200</span>
                        </div>
                    </div> 
                    <div class="buttons mt-3">
                        <button class="cart-btn" onClick={this.addCart} id="20212">ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/clothmask.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Cloth Mask</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Light and Soft Washable Cloth Face Mask</span>

                        </div>
                        <div class="tshirtcost mt-3 text-dark">
                            <span>Rs.50</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20213" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container-shop mb-5 mt-5">
        <div class="row">
           

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/sanitizer100.png" alt="" class="rounded" width="160"></img>

                        <h5>Sanitizer 100ml</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Alchohl based Pocket Sanitizer 100ml</span>

                        </div>
                        <div class="cost mt-3 text-dark">
                            <span>Rs.40</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20214" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/sanitizer500.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Sanitizer 500ml</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Alchohl based Hand Sanitizer 500ml</span>
                        </div>
                        <div class="watchcost mt-3 text-dark">
                            <span>Rs.150</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20215" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/steamer.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Steamer</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">3 in 1 Steamer Vaporizer</span>

                        </div>
                        <div class="tshirtcost mt-3 text-dark">
                            <span>Rs.250</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20216" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-shop mb-5 mt-5">
        <div class="row">

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/faceshield.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Face Shield</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Reusable Protective Face Shield</span>

                        </div>
                        <div class="cost mt-3 text-dark">
                            <span>Rs.120</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20217" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/dgloves.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Disposable gloves</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">White disposable Surgical Gloves(Pack of 10)</span>

                        </div>
                        <div class="watchcost mt-3 text-dark">
                            <span>Rs.70</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20218" onClick={this.addCart}V>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/ppekit.jpg" alt="" class="rounded" width="160"></img>

                        <h5>PPE Kit</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">PPE Kit for Full Body Protection with all Accessories</span>

                        </div>
                        <div class="tshirtcost mt-3 text-dark">
                            <span>Rs.350</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="20219" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>
        </div>
        <div class="container mb-5 mt-5">
        <div class="row">
           

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/mthermo.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Thermometer</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Mercury Thermometer(0-360 Degree Celsius)</span>

                        </div>
                        <div class="cost mt-3 text-dark">
                            <span>Rs.75</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="202110" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/dthermo.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Digital Thermometer</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Digital Thermometer with Quick Measurement</span>

                        </div>
                        <div class="watchcost mt-3 text-dark">
                            <span>Rs.180</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="202111" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>

            <div class="col-md-3">

                <div class="card mt-3">

                    <div class="product-1 align-items-center p-2 text-center">

                        <img src="images/oximeter.jpg" alt="" class="rounded" width="160"></img>

                        <h5>Oximeter</h5>

                        <div class="mt-3 info">

                            <span class="text1 d-block">Finger Tip Pulse Oximeter</span>

                        </div>
                        <div class="tshirtcost mt-3 text-dark">
                            <span>Rs.1500</span>
                        </div>
                    </div>
                    <div class="buttons mt-3">
                        <button class="cart-btn" id="202112" onClick={this.addCart}>ADD TO CART</button>
                      </div>
                </div>
            </div>
        </div>

    </div>

    </div>

    </div>

    

            </>
        );
    }
}



export default withRouter(Shop);

