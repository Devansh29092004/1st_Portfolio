import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const closeModal = () => {
    setToggleState(0);
  };

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        
        <div className="sevices_container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Full Stack <br/> Developer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>
            </div>
             <div className="services__content">
                <div>
                    <i className="uil uil-brain services__icon"></i>
                    <h3 className="services__title">
                        Machine Learning & <br/> Data Science
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            </div>
             <div className="services__content">
                <div>
                    <i className="uil uil-robot services__icon"></i>
                    <h3 className="services__title">
                        AI & Automation <br/> Developer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            </div>
        </div>

        {/* Modals rendered outside the container */}
        {toggleState === 1 && (
            <div className="services__modal active-modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={closeModal}></i>

                    <h3 className="services__modal-title">Full Stack Developer</h3>
                    <p className="services__model-description">Delivering scalable and secure web solutions with over 2 years of hands-on experience across frontend, backend, and cloud deployment.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Build responsive, high-performance websites and web applications
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Develop robust backend systems with secure APIs
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Implement user authentication (JWT, OAuth 2.0, Firebase Auth)
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                 Integrate real-time features using WebSockets or Firebase Realtime DB
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                 Deploy and manage apps on Vercel, Netlify, Render, or custom servers
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )}

        {toggleState === 2 && (
            <div className="services__modal active-modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={closeModal}></i>

                    <h3 className="services__modal-title">Machine Learning & Data Science</h3>
                    <p className="services__model-description">Building intelligent solutions using real-world data and practical machine learning techniques.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Develop ML models for classification and prediction
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Clean and analyze datasets using Python
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Create data visualizations and reports
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Build simple dashboards with Streamlit or Flask
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Evaluate model performance with key metrics
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )}

        {toggleState === 3 && (
            <div className="services__modal active-modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={closeModal}></i>

                    <h3 className="services__modal-title">AI & Automation Developer</h3>
                    <p className="services__model-description">Developing intelligent solutions that automate tasks and deliver predictive insights using machine learning and Python.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Build AI-powered tools for text, image, or audio processing
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Create data-driven dashboards with Streamlit or Flask
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Train custom models for resume parsing or image classification
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Perform data wrangling, feature engineering, and model evaluation
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Develop automation scripts for scraping, file processing, and alerts
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )}
    </section>
  )
}

export default Services