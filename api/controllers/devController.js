const Developer = require('../models/Developer');

//Get all devs
exports.getDev = async (req, res) => {
    try {
        const devs = await Developer.find({});
        res.status(201).json({
            devs,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'Something went wrong, please try again.',
            error: error,
        });
    }
};

// Add a new dev
exports.addDev = async (req, res) => {
    try {
        const newDev = await Developer.create(req.body);
        res.status(201).json({
            message: 'Post created',
            newDev,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong, please try again.',
            error: error,
        });
    }
};

exports.updateDev = async (req, res) => {
    try {
        const updatedDev = await Developer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            message: 'Developer information successfully updated',
            updatedDev,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong, please try again.',
            error,
        });
    }
};

exports.dismissDev = async (req, res) => {
    try {
        const dismissed = await Developer.findByIdAndUpdate(
            req.params.id,
            {
                startDate: '',
                endDate: '',
                isHired: 'false',
            },
            { new: true }
        );
        res.status(200).json({
            message: 'Developer dismissed',
            dismissed,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong, please try again.',
            error,
        });
    }
};

exports.hireDev = async (req, res) => {
    try {
        const hired = await Developer.findByIdAndUpdate(
            req.params.id,
            {
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                isHired: 'true',
            },
            { new: true }
        );
        res.status(200).json({
            message: 'Developer hired',
            hired,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong, please try again.',
            error,
        });
    }
};

// exports.hireDev =
