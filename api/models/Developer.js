const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
        },
        hourlyRate: {
            type: String,
            required: true,
        },
        technology: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
        },
        yearsOfExp: {
            type: String,
            required: true,
        },
        nativeLanguage: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
        },
        isHired: {
            type: Boolean,
            default: false,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
    },
    { timestamps: true }
);

// eslint-disable-next-line new-cap
const Developer = new mongoose.model('developer', DeveloperSchema);

module.exports = Developer;
