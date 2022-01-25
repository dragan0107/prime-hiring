import React from 'react';
import moment from 'moment';
import './SingleDeveloper.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PaidIcon from '@mui/icons-material/Paid';
import Checkbox from '@mui/material/Checkbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import axios from 'axios';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SingleDeveloper = ({
    devData,
    setForHiring,
    hired,
    setUpdated,
    setEditDevData,
    setOpenUpdateModal,
}) => {
    const handleChange = () => {
        setForHiring((prevValues) => {
            const arr = [...prevValues];
            const devIdx = arr.indexOf(devData._id);
            if (devIdx >= 0) {
                arr.splice(devIdx, 1);
                return arr;
            } else {
                arr.push(devData._id);
                return arr;
            }
        });
    };

    const fireDev = async () => {
        try {
            await axios.put(`/developers/${devData._id}/dismiss`);
            setUpdated((prevValue) => !prevValue);
        } catch (error) {
            console.log(error);
        }
    };

    const editDev = () => {
        setEditDevData(devData);
        setOpenUpdateModal(true);
    };
    return (
        <div className="single-dev-wrapper">
            <section className="img-section">
                <img
                    className="dev-pfp"
                    src={
                        devData.profilePic ||
                        'https://res.cloudinary.com/dripcloud/image/upload/v1642728187/test_upload_react/mxi9bjdad7olqr0uxw4v.jpg'
                    }
                    alt=""
                />
            </section>
            <section className="info-left">
                <h1 className="dev-name">{devData.fullName}</h1>
                <p className="email">
                    <AlternateEmailIcon className="dev-icons" /> {devData.email}
                </p>
                <p className="phone-num">
                    <PhoneIcon className="dev-icons" /> {devData.number}
                </p>
                <p className="dev-location">
                    <LocationOnIcon className="dev-icons" /> {devData.location}
                </p>
                <p className="dev-linkedin">
                    <LinkedInIcon className="dev-icons" />{' '}
                    <a
                        href={devData.linkedin && `${devData.linkedin}`}
                        className="linkedin-link"
                    >
                        {devData.linkedin || '/'}
                    </a>
                </p>
            </section>
            <section className="info-right">
                <div className="info-right-wrapper">
                    <p id="dev-desc">
                        <InfoIcon className="dev-icons" />{' '}
                        <span>{devData.desc}</span>
                    </p>
                    <p className="dev-language">
                        <LanguageIcon className="dev-icons" />
                        <span>{devData.nativeLanguage}</span>
                    </p>
                    <p className="dev-technology">
                        <CodeIcon className="dev-icons" />{' '}
                        <span>{devData.technology}</span>
                    </p>
                    <p className="years-xp">
                        <WorkIcon className="dev-icons" />
                        <span className="xp">{devData.yearsOfExp}</span>
                    </p>
                    <p className="hourly-rate">
                        <PaidIcon className="dev-icons" />
                        <span className="xp">{devData.hourlyRate}/hr</span>
                    </p>
                    {hired && (
                        <p className="hired-date">
                            <AccessTimeIcon className="dev-icons" />
                            <span className="xp">
                                Hired from:{' '}
                                {moment(devData.startDate).format(
                                    'MMMM Do YYYY'
                                )}{' '}
                                until{' '}
                                {moment(devData.endDate).format('MMMM Do YYYY')}
                            </span>
                        </p>
                    )}
                </div>
            </section>
            <div className="edit-delete">
                <ModeEditIcon
                    className="dev-icons update-icons edit-icon"
                    sx={{ color: 'green' }}
                    onClick={editDev}
                />
                <DeleteForeverIcon
                    className="dev-icons update-icons delete-icon"
                    sx={{ color: 'red' }}
                />
            </div>
            <div className="checkbox-div">
                {!hired ? (
                    <>
                        <Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            onChange={handleChange}
                        />
                        <span>Select for hiring</span>
                    </>
                ) : (
                    <Button variant="contained" onClick={fireDev}>
                        FIRE
                    </Button>
                )}
            </div>
        </div>
    );
};

export default SingleDeveloper;
