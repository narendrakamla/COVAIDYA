import React from 'react';
import './Header.css';
import {Component} from 'react-dom';
class Formhandle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:""};
        this.stateChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange=(event)=>
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event)
    {
        alert('SEARCHING');
        event.preventDefault();
    }

    render() {
        return (
           <div className="f1">
                <form className=" d-flex mx-2 " role="search" id="navBarSearchForm" style={{padding:"10px 10px"}}onSubmit={this.handleSubmit}>
          <input class="form-control me-2 input-lg" value={this.state.value} onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-sm btn-outline-light " type="submit"  value="Search"  >Search</button>
    
              </form>
        </div>
        );
    }
}



export default Formhandle;
