import React from 'react';
import PersonalizedStartupSection from '../PersonalizedStartupSection';
import BussinessBoostSection from '../BussinessBoostSection';
import ServicesRangeSection from '../ServicesRangeSection';
import WhoAreWe from '../WhoAreWe';
import ChooseUsSection from '../ChooseUsSection';
import ConsultationSection from '../ConsultationSection';

const Index = () => {
    return (
        <main>
            <div className="app">
                <div className="hero-split">
                    <h1 className="heading">Transforming Businesses with Expertise and Excellence</h1>
                    <p className="margin-bottom-24px">
                        Fuel Your Business Growth with Our Power-Packed Business Solutions for a better tomorrow
                    </p>
                    <div className="hero-form w-form">
                        <form
                            id="wf-form-Hero-Form"
                            name="wf-form-Hero-Form"
                            data-name="Hero Form"
                            method="get"
                            className="hero-form-container"
                            data-wf-page-id="64b0dfc0bfa43fcb05d90405"
                            data-wf-element-id="e7812da4-44b1-06db-476f-e2e819690fda"
                            aria-label="Hero Form"
                        >
                            <input
                                type="email"
                                className="hero-form-input w-input"
                                maxLength="256"
                                name="Hero-Email"
                                data-name="Hero Email"
                                aria-label="Enter your email"
                                placeholder="Enter your email"
                                id="Hero-Email"
                                required=""
                            />
                            <input
                                type="submit"
                                value="Get Started"
                                data-wait="Please wait..."
                                className="button-primary-3 w-button"
                            />
                        </form>
                        <div className="text-block">
                            Our team will soon be in contact, ready to elevate your business journey.
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    <video
                        src="https://moretasks.com/images/video.mp4"
                        autoPlay
                        muted
                        loop
                        className="background-video"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: 'auto',
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="hero-wrapper-3" 
                // style={{ marginTop: '200px' }}
                 >
                    <div className="hero-card">
                        <div className="hero-text">
                            <h2>Game-changing shift in customer support with AI.</h2>
                            <p className="margin-bottom-24px-3">
                                Embrace the next generation of change with the revolution in
                                customer-focused business solutions powered by Artificial
                                Intelligence for unparalleled success.
                            </p>
                            <a href="https://moretasks.com/product.html" className="button-primary-5 w-button">
                                Learn More
                            </a>
                        </div>
                        <div className="hero-image">
                            <img
                                src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b3926edac67d4398b1a831_Rectangle%2013%20(1).png"
                                loading="lazy"
                                alt=""
                                className="shadow-two-3"
                            />
                        </div>
                    </div>
                </div>
                </div>
                <PersonalizedStartupSection />
                <BussinessBoostSection />
                <ServicesRangeSection />
                <WhoAreWe />
                <ChooseUsSection />
                <ConsultationSection />
        </main>
    )
}

export default Index