import React from 'react';
import './SingleDeveloper.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';

const SingleDeveloper = () => {
    return (
        <div className="single-dev-wrapper">
            <section className="img-section">
                <img
                    className="dev-pfp"
                    src="https://res.cloudinary.com/dripcloud/image/upload/v1642728187/test_upload_react/mxi9bjdad7olqr0uxw4v.jpg"
                    alt=""
                />
            </section>
            <section className="info-left">
                <h1 className="dev-name">Dragan S</h1>
                <p className="email">
                    <AlternateEmailIcon className="dev-icons" />{' '}
                    s.dragan016@gmail.com
                </p>
                <p className="phone-num">
                    <PhoneIcon className="dev-icons" /> 061-111/111/11
                </p>
                <p className="dev-location">
                    <LocationOnIcon className="dev-icons" /> Serbia, NI
                </p>
                <p className="dev-linkedin">
                    <LinkedInIcon className="dev-icons" />{' '}
                    https://www.linkedin.com/
                </p>
            </section>
            <section className="info-right">
                <div className="info-right-wrapper">
                    <p id="dev-desc">
                        <InfoIcon className="dev-icons" />{' '}
                        <span>
                            I am a very experienced and passionate Full-Stack JS
                            Developer. My main technologies are React and
                            Node.js with Express.
                        </span>
                    </p>
                    <p className="dev-language">
                        <LanguageIcon className="dev-icons" />
                        <span>Serbian</span>
                    </p>
                    <p className="dev-technology">
                        <CodeIcon className="dev-icons" />{' '}
                        <span>Javascript</span>
                    </p>
                    <p className="years-xp">
                        <WorkIcon className="dev-icons" />
                        <span className="xp">5 years</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SingleDeveloper;
