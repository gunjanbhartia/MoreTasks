import React from "react";
import '../product.css';
import ExperienceRevolutionCS from '../ExperienceRevolutionCS.js';
import IntroducingAI from '../IntroducingAI.js';
import QuestionsConsultation from '../QuestionsConsultation.js';

const Product = () => {
    return (
        <main>
            <section className="section-97 wf-section ai-hero">
                <div className="w-layout-blockcontainer container-15 w-container">
                    <div className="div-block-4">
                        <h2 class="revcs">
                            Are you ready to <br/>revolutionize <br /> your customer support?
                        </h2>
                        <p>
                            Join us on the transformative journey as we unveil our <br/>groundbreaking AI solution to redefine the customer<br/> experience.
                        </p>
                    </div>
                    <div className="div-block-5 ai-hero"></div>
                </div>
            </section>

            <ExperienceRevolutionCS />
            <IntroducingAI/>
            <QuestionsConsultation/>
        </main>
    );
};

export default Product;
