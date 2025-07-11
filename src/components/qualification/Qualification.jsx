import React from 'react'
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My academic journey</span>

            <div className="qualification__container container">
                <div className="qualification__timeline">
                    <div className="qualification__item">
                        <div className="qualification__content">
                            <div className="qualification__badge qualification__badge--current">Current</div>
                            <h3 className="qualification__title">B.Tech in Computer Science Engineering</h3>
                            <p className="qualification__institution">Chameli Devi Group of Institutions – Indore</p>
                            <p className="qualification__university">Affiliated to RGPV</p>
                            <div className="qualification__date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>2022 – Present</span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__item">
                        <div className="qualification__content">
                            <div className="qualification__badge qualification__badge--completed">Completed</div>
                            <h3 className="qualification__title">Higher Secondary (12th Grade)</h3>
                            <p className="qualification__institution">Shri Anand Higher Secondary School – Indore</p>
                            <p className="qualification__university">CBSE Board</p>
                            <div className="qualification__date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>2021 – 2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__item qualification__item--last">
                        <div className="qualification__content">
                            <div className="qualification__badge qualification__badge--completed">Completed</div>
                            <h3 className="qualification__title">Secondary School (10th Grade)</h3>
                            <p className="qualification__institution">Shri Anand Higher Secondary School – Indore</p>
                            <p className="qualification__university">CBSE Board</p>
                            <div className="qualification__date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>2019 – 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification