import React from "react";
import '../AboutUs.css';
import Person1 from '../Person1';
import Person2 from '../Person2';
import Person3 from '../Person3';
import Person4 from '../Person4';

const AboutUs = () => {
    return (
        <main>
            <section className="section-97 wf-section">
                <div className="w-layout-blockcontainer container-15 w-container">
                    <div className="div-block-4">
                        <h2 class="h2-text"> 
                        Accelerate Growth, Maximize Efficiency:<br/> Partner with the Leaders in Business.
                        </h2>
                        <p>
                        With a pursuit of excellence and dedication to our clients, we<br/> proudly lead the way as trailblazers in our industry.
                        </p>
                    </div>
                    <div className="div-block-5-2"></div>
                </div>
            </section>

            <Person1/>   
            <Person2/> 
            <Person3/>  
            <Person4/>     
        </main>
    );
};

export default AboutUs;
