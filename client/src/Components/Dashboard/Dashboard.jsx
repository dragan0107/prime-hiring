import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@mui/styles';
import AddDevModal from '../AddDevModal/AddDevModal';
import axios from 'axios';

import './Dashboard.css';
import SingleDeveloper from '../SingleDeveloper/SingleDeveloper';
import DateRange from '../DateRange/DateRange';
import { Button } from '@mui/material';

const Dashboard = () => {
    const [value, setValue] = useState('1');
    const [jobMarket, setJobMarket] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [dates, setDates] = useState([null, null]);
    const [forHiring, setForHiring] = useState([]);
    const [editDevData, setEditDevData] = useState({});
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [deleted, setDeleted] = useState(false);
    //MUI Tab list changer
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        tabPanel: {
            height: '700px',
            padding: 20,
        },
    });

    const classes = useStyles();

    useEffect(() => {
        const getDevs = async () => {
            try {
                const res = await axios.get('/developers');
                setJobMarket(res.data.devs);
            } catch (error) {
                console.log(error);
            }
        };
        getDevs();
    }, [updated, deleted]);

    const hireDevs = () => {
        let users = [];
        let promises = [];
        if (dates[0] !== null && forHiring.length > 0) {
            forHiring.forEach((devId) => {
                promises.push(
                    axios
                        .put(`/developers/${devId}/hire`, {
                            startDate: dates[0],
                            endDate: dates[1],
                        })
                        .then((res) => users.push(res))
                );
            });
            Promise.all(promises).then(() => console.log(users));
            setUpdated((prevValue) => !prevValue);
            setErrorMsg('');
        } else {
            setErrorMsg('Select the candidate to hire and choose date!');
        }
    };

    return (
        <div className="dash-container">
            <div className="dash-inner">
                <Box
                    sx={{
                        width: '100%',
                        typography: 'body1',
                        position: 'relative',
                    }}
                >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                centered
                            >
                                <Tab label="Job Market" value="1" />
                                <Tab label="Currently Hired" value="2" />
                            </TabList>
                            <AddDevModal
                                id="add-dev-modal"
                                setUpdated={setUpdated}
                                setEditDevData={setEditDevData}
                                editDevData={editDevData}
                                openUpdateModal={openUpdateModal}
                                setOpenUpdateModal={setOpenUpdateModal}
                            />
                        </Box>
                        <TabPanel
                            className={classes.tabPanel}
                            use
                            value="1"
                            // className="job-market"
                        >
                            <div className="job-market-box">
                                {jobMarket.map(
                                    (devData) =>
                                        !devData.isHired && (
                                            <SingleDeveloper
                                                key={devData._id}
                                                devData={devData}
                                                setForHiring={setForHiring}
                                                setEditDevData={setEditDevData}
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                                setDeleted={setDeleted}
                                            />
                                        )
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel className={classes.tabPanel} value="2">
                            <div className="job-market-box hired-devs">
                                {jobMarket.map(
                                    (devData) =>
                                        devData.isHired && (
                                            <SingleDeveloper
                                                key={devData._id}
                                                devData={devData}
                                                hired={true}
                                                setUpdated={setUpdated}
                                                setEditDevData={setEditDevData}
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                                setDeleted={setDeleted}
                                            />
                                        )
                                )}
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>
                {value === '1' && (
                    <div className="hiring-box">
                        <span className="error-msg-hiring">{errorMsg}</span>
                        <div className="date-range-box">
                            <DateRange setDates={setDates} dates={dates} />
                        </div>
                        <Button
                            variant="contained"
                            className="hire-btn"
                            onClick={hireDevs}
                        >
                            HIRE!
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
