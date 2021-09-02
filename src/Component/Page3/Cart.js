import React from 'react';
import PropTypes from 'prop-types';
import './Shop.css'
class Cart extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {data:this.props.location.data};
    }
    Incrementval=(event)=>
    {

        const cost=document.getElementById("C"+event.target.id).value;
       console.log(event.target.value)
document.getElementById("D"+event.target.id).innerHTML=event.target.value*cost;

    }
    render() {
    console.log(this.state.data);
       

        return (
        
            <>
            <div class="cart-page pt-5 pb-5 ">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
           
             {this.state.data.map((obj)=>
             
              
              <tr>
                  <td>
                  <div class="cart-info" >  
                      <img src={obj.url}></img>
                      <div>
                          <p>{obj.item_Name}</p>
                          <small id={"C"+obj.item_Id} value={obj.item_Cost}> </small>
                         
                          <a href="">Remove</a>
                      </div>
                  </div>
              </td>
              
              <td><input type="number" id={obj.item_Id} onChange={this.Incrementval}></input> </td>
             
              <td  id={"D"+obj.item_Id} value={obj.item_Cost*document.getElementById(obj.item_Id).value}> </td>
              </tr>
             
             )}
               
          
            
            
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>Rs. 420</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>Rs. 30</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>Rs. 450</td>
                </tr>
            </table>
        </div>
    </div>
    </>
        );
    }
}



export default Cart;
