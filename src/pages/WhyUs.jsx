import React from "react";
import '../WhyUs.css';
import Expertise from '../Expertise';
import ConsultationSection from "../ConsultationSection";

const WhyUs=()=>{
    return(
        <main>
            <section className="hero-heading-left-2 wf-section service_hero-2">
                <div className="container-7">
                    <div className="hero-wrapper-2">
                        <div className="hero-split-2">
                            <h1 className="heading-10-2">Why US?</h1>
                            <p className="margin-bottom-24px-2-2">At Moretasks, we believe every business is unique, and so should its solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Expertise/>
            <ConsultationSection/>
        </main>
    )
}

export default WhyUs