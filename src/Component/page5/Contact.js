import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
          
                <section>
    <div class="container-fluid pt-5 pb-5" id="aboutid">
        <div class="section_header text-center mb-5 mt-4">

            <h1> Contact Us</h1>

        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 col-12">
                    <form>
                        <div class="form-group mt-3">
                            <label>FirstName </label>
                            <input type="text" class="form-control" name="username" placeholder="FirstName"
                                autocomplete="off" required></input>
                        </div>
                        <div class="form-group mt-3">
                            <label>LastName </label>
                            <input type="text" class="form-control" name="username" placeholder="LastName"
                                autocomplete="off" required></input>
                        </div>
                        <div class="form-group mt-3">
                            <label>Email </label>
                            <input type="email" class="form-control" name="email" placeholder=" name@example.com"
                                required autocomplete="off"></input>
                        </div>
                        <div class="form-group mt-3">
                            <label>Mobile No.</label>
                            <input type="number" class="form-control" name="MobileNo" placeholder="Number"
                                autocomplete="off" required></input>
                        </div>
                        <div class="form-group mt-3 mb-3">
                            <label class="mb-3">Select Symptoms:</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Cold</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Fever</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Difficulty in Breathing</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Feeling Weak</label>
                          </div>
                        </div>
                        <div class="form-group mt-3 mb-3">
                            <label for="exampleFormControlTextarea1">Describe how you are feeling</label>
                             <textarea class="form-control" id="exampleFormControlTextareal" rows="3"></textarea>                                                                                             
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</>
        );
    }
}



export default Contact;
