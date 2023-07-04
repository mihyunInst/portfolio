import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDisplay, faDatabase, faCertificate} from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <div>
            <section id="about" className="section section__container">
                <h1>Skills</h1>
             
                <div className="about__majors">
                    <div className="major">
                        <FontAwesomeIcon icon={faDisplay} style={{color: "#42526B", fontSize: '50px'}} /> 
                        <h2 className="major__title">Front End</h2>
                        <div className="major__description">
                            <p>React / Redux</p>
                            <p>HTML / CSS</p>
                            <p>Typescript</p>
                            <p>Javascript</p>
                            <p>JSP</p>
                            <p>Styled-Component</p>
                            <p>Scss/Sass</p>
                        </div>
                    </div>
                    <div className="major">
                        <FontAwesomeIcon icon={faDatabase} style={{color: "#42526B", fontSize: '50px'}} />
                        <h2 className="major__title">Back End</h2>
                        <div className="major__description">
                            <p>Java / Spring</p>
                            <p>OracleDB</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>APIs</p>
                        </div>
                    </div>
                    <div className="major">
                        <FontAwesomeIcon icon={faCertificate} style={{color: "#42526B", fontSize: '50px'}} />
                        <h2 className="major__title">Certificate</h2>
                        <div className="major__description">
                            <p>NCS 훈련 확인 강사</p>
                            <p>정보처리산업기사</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;