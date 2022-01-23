import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@mui/styles';

import './Dashboard.css';
import SingleDeveloper from '../SingleDeveloper/SingleDeveloper';

const Dashboard = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        tabPanel: {
            height: 470,
            padding: 20,
        },
    });

    const classes = useStyles();

    return (
        <div className="dash-container">
            <div className="dash-inner">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                centered
                            >
                                <Tab label="Job Market" value="1" />
                                <Tab label="Currently Hired" value="2" />
                                <Tab label="Item Three" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel
                            className={classes.tabPanel}
                            use
                            value="1"
                            // className="job-market"
                        >
                            <div className="job-market-box">
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                                <SingleDeveloper />
                            </div>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

export default Dashboard;
