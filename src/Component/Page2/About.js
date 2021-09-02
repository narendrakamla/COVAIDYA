import React from 'react';
import PropTypes from 'prop-types';
import './About.css'
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <section>
        <div class="container-fluid pt-5 pb-5" id="aboutid">
            <div class="section_header text-center mb-5 mt-4">

                <h1> Overview</h1>

            </div>

            <div class="row pt-5">

                <div class="col-lg-5 col-md-6 col-12 ml-5"> <img src="images/Coronavirus.jpg" class="img-fluid"
                        width="1000px" height="2400px"></img>

                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <h2>What is COVID-19 (Corona-Virus) </h2>

                    <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new
                        virus
                        and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</p>
                    <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness
                        and
                        recover without requiring special treatment. Older people, and those with underlying medical
                        problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more
                        likely to develop serious illness.</p>

                    <p> The best way to prevent and slow down transmission is to be well informed about the COVID-19
                        virus,
                        the disease it causes and how it spreads. Protect yourself and others from infection by washing
                        your
                        hands or using an alcohol based rub frequently and not touching your face. </p>
                </div>
            </div>
        </div>
    </section>
    <section id="Precaution">
        <div class="container-fluid pt-5 pb-5" id="aboutid">
            <div class="section_header text-center mb-5 mt-4">

                <h1> Precaution </h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/handwash.gif" id="imghover" class="img-fluid" width="120"
                                        height="120"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based
                                    hand rub</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/mask.png" class="img-fluid" width="150" height="200"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>Cover your nose and mouth with Mask properly while going out</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/distancing.jpg" class="img-fluid" width="150" height="150"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>Maintain at least 1 metre distance between you and people coughing or sneezing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/home.png" class="img-fluid" width="150" height="170"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>Stay home and self-isolate yourself if you feel unwell.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/nosmoke.jpg" class="img-fluid" width="120" height="120"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>Refrain from smoking and other activities that weaken the lungs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src="images/medic.png" class="img-fluid" width="120" height="120"></img>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p>If you have fever, cough or difficulty in breathing, seek medical care early </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id='Symptom'>
        

        
        <div class="container-fluid pt-5 pb-5" id="aboutid">
            <div class="section_header text-center mb-5 mt-4">

                <h1> Symptoms </h1>
            </div>
            <div class=" text-center mb-5 mt-5">

                <h3 style={{color: 'green'}}> Common Symptoms:</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/fever.jpg" id="imghover" class="img-fluid" width="140"
                                        height="140"></img>
                                    <figcaption>Fever</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/dryCough.jpg" id="imghover" class="img-fluid" width="120"
                                        height="120"></img>
                                    <figcaption>Dry Cough</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/tired.jpg" id="imghover" class="img-fluid" width="120"
                                        height="120"></img>
                                    <figcaption>Tiredness</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/pain.jpg" id="imghover" class="img-fluid" width="140" height="140"></img>
                                    <figcaption>Aches or Pain</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/headache.jpg" id="imghover" class="img-fluid" width="140"
                                        height="140"></img>
                                    <figcaption>Headache</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/smelltaste.jpg" id="imghover" class="img-fluid" width="160"
                                        height="140"></img>
                                    <figcaption>Loss of smell or taste</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mb-5 mt-5">

                <h3 style={{color: 'red'}}> Serious Symptoms:</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/breathing.jpg" id="imghover" class="img-fluid" width="120"
                                        height="140"></img>
                                    <figcaption>Difficulty breathing or shortness of Breath</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/chestpain.jpg" id="imghover" class="img-fluid" width="150"
                                        height="120"></img>
                                    <figcaption>Chest Pain or pressure</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5 shadow">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-12">
                                <figure class="text-center">
                                    <img src="images/speech.jpg" class="img-fluid" width="180" height="180"></img>
                                    <figcaption>Loss of speech or movement</figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    </section>
    <section id="Treatment">
        <div class="container">
            <div class="section_header text-center mb-5 mt-5">

                <h1> Treatment </h1>
            </div>
            <div class="container-fluid">
                <h4 style={{color: 'blue'}}>For Asymptomatic cases, mild cases of COVID-19:</h4>
                <ul>

                    <li>Isolate yourself in a well ventilated room.</li>
                    <li>Patients must be in communication with a treating physician and promptly report in case of any
                        worsening.</li>
                    <li>Use a triple layer medical mask, discard mask after 8 hours of use or earlier if they
                        become wet or visibly soiled. In the event of a caregiver entering the room, both caregiver and
                        patient may consider using N 95 mask. </li>
                    <li>Mask should be discarded only after disinfecting it with 1% Sodium Hypochlorite.</li>
                    <li>Take rest and drink a lot of fluids to maintain adequate hydration.</li>
                    <li>Follow respiratory etiquettes at all times.</li>
                    <li>Patients may perform warm water gargles or take steam inhalation twice a day.</li>
                    <li>Frequent hand washing with soap and water for at least 40 seconds or clean with
                        alcohol-based sanitizer.</li>
                    <li>Don’t share personal items with other people in the household.</li>
                    <li>Ensure cleaning of surfaces in the room that are touched often (tabletops, doorknobs,
                        handles, etc.) with 1% hypochlorite solution.</li>
                    <li>Monitor temperature daily.</li>
                    <li>Monitor oxygen saturation with a pulse oximeter daily.</li>
                </ul>
                <h4 style={{color: 'green'}}>Instructions for Caregivers:</h4>
                <ul>
                    <li>Mask: The caregiver should wear a triple layer medical mask. N95 mask may be considered when in
                        the same room with the ill person.</li>
                    <li> Hand hygiene: Hand hygiene must be ensured following contact with ill person or patient’s
                        immediate environment.</li>
                    <li> Exposure to patient/patient’s environment: Avoid direct contact with body fluids of the
                        patient, particularly oral or respiratory secretions. Use disposable gloves while handling the
                        patient. Perform hand hygiene before and after removing gloves.</li>
                </ul>
                <h4 style={{color: 'red'}}>When to seek immediate Medical Attention:</h4>
                <ul>
                    <li>Difficulty in breathing</li>
                    <li> Dip in oxygen saturation (SpO2 less than 94% on room air)</li>
                    <li> Persistent pain/pressure in the chest</li>
                    <li> Mental confusion or inability to arouse</li>
                </ul>
            </div>
        </div>
    </section>
            </div>
        );
    }
}



export default About;
