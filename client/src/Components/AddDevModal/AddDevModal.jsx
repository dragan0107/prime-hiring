import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './AddDevModal.css';
import { TextareaAutosize, TextField } from '@mui/material';
import TechMenu from '../TechMenu/TechMenu';
import axios from 'axios';
import { updateDev } from '../../ApiCalls/ApiCalls';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxHeight: '100%',
    overflow: 'auto',
    p: 4,
};

const AddDevModal = ({
    setUpdated,
    editDevData,
    setOpenUpdateModal,
    openUpdateModal,
    setEditDevData,
}) => {
    const [open, setOpen] = useState(openUpdateModal);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setOpenUpdateModal(false);
    };
    const [tech, setTech] = useState('');
    const [language, setLanguage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [formValues, setFormValues] = useState({
        fullName: '' || editDevData.fullName,
        email: '' || editDevData.email,
        number: '' || editDevData.number,
        location: '' || editDevData.location,
        profilePic: '' || editDevData.profilePic,
        hourlyRate: '' || editDevData.hourlyRate,
        linkedin: '' || editDevData.linkedin,
        desc: '' || editDevData.desc,
        yearsOfExp: '' || editDevData.yearsOfExp,
    });
    console.log(formValues);
    formValues.technology = tech;
    formValues.nativeLanguage = language;

    const technologies = [
        'JavaScript',
        'Java',
        '.NET',
        'Flutter',
        'Python',
        'PHP',
    ];
    const languages = ['Serbian', 'Bulgarian', 'English'];

    const handleChange = (e) => {
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
        setEditDevData({
            ...editDevData,
            [e.target.name]: value,
        });
        console.log(formValues);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!language.length || !tech.length)
            setErrorMsg('Please choose your native language and Technology!');
        else {
            try {
                const res = await axios.post('/developers', formValues);
                console.log(res.data.newDev);
                clearInputs();
                setUpdated((prevValue) => !prevValue);
                setErrorMsg('');
                handleClose();
            } catch (error) {
                console.log(error);
                setErrorMsg('');
            }
        }
    };

    const clearInputs = () => {
        setFormValues({
            fullName: '',
            email: '',
            number: '',
            location: '',
            profilePic: '',
            hourlyRate: '',
            linkedin: '',
            desc: '',
            yearsOfExp: '',
        });
        formValues.technology = '';
        formValues.nativeLanguage = '';
        setEditDevData({});
    };
    const handleUpdate = () => {
        updateDev(
            language,
            tech,
            setErrorMsg,
            axios,
            formValues,
            clearInputs,
            setUpdated,
            handleClose,
            editDevData
        );
    };
    return (
        <div>
            <Button id="dev-modal-btn" onClick={handleOpen}>
                Add New Dev
            </Button>
            <Modal
                open={open || openUpdateModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="" onSubmit={handleSubmit}>
                        {' '}
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Full Name"
                                name="fullName"
                                value={
                                    (editDevData && editDevData.fullName) ||
                                    formValues.fullName
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="E-mail"
                                name="email"
                                value={
                                    (editDevData && editDevData.email) ||
                                    formValues.email
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Phone Number"
                                name="number"
                                value={
                                    (editDevData && editDevData.number) ||
                                    formValues.number
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Location"
                                name="location"
                                value={
                                    (editDevData && editDevData.location) ||
                                    formValues.location
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Years of Experience"
                                name="yearsOfExp"
                                value={
                                    (editDevData && editDevData.yearsOfExp) ||
                                    formValues.yearsOfExp
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Hourly Rate"
                                name="hourlyRate"
                                value={
                                    (editDevData && editDevData.hourlyRate) ||
                                    formValues.hourlyRate
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                id="outlined-required"
                                placeholder="Profile picture URL"
                                name="profilePic"
                                value={
                                    (editDevData && editDevData.profilePic) ||
                                    formValues.profilePic
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextField
                                id="outlined-required"
                                placeholder="Linkedin URL"
                                name="linkedin"
                                value={
                                    (editDevData && editDevData.linkedin) ||
                                    formValues.linkedin
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TechMenu
                                options={technologies}
                                title={'Technologies'}
                                setValue={setTech}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TechMenu
                                options={languages}
                                title={'Native Language'}
                                setValue={setLanguage}
                            />
                        </div>
                        <div className="text-box-new-dev-form">
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Description"
                                style={{
                                    width: '216px',
                                    borderRadius: '5px',
                                    fontSize: '15px',
                                }}
                                name="desc"
                                value={
                                    (editDevData && editDevData.desc) ||
                                    formValues.desc
                                }
                                onChange={handleChange}
                            />
                        </div>
                        {!openUpdateModal ? (
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleUpdate}>
                                Update
                            </Button>
                        )}
                        {errorMsg && <p className="error-msg">{errorMsg}</p>}
                    </form>
                    <Button
                        variant="contained"
                        id="clear-btn"
                        onClick={clearInputs}
                    >
                        Clear Inputs
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default AddDevModal;
