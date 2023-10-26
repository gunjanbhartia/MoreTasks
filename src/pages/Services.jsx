import React from "react";
import BusinessOperation from '../BusinessOperation';
import CustomerService from '../CustomerService';
import EcommerceWebsite from '../EcommerceWebsite';
import DigitalManagement from '../DigitalManagement';
import DataOperation from '../DataOperation';
import WebAppDevelopement from '../WebAppDevelopement';

const Services = () => {
    return (
        <main>
            <section className="hero-heading-left wf-section service_hero">
                <div className="container-7">
                    <div className="hero-wrapper-2">
                        <div className="hero-split-2">
                            <h1 className="heading-10">Services</h1>
                            <p className="margin-bottom-24px-2">Discover our essential solutions and trust us to handle everything else with unwavering confidence.</p>
                        </div>
                    </div>
                </div>
            </section>


            <BusinessOperation />
            <CustomerService />
            <EcommerceWebsite />
            <DigitalManagement />
            <DataOperation />
            <WebAppDevelopement />
        </main>
    )
}

export default Services