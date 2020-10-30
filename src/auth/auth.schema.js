const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        title: {
            type: String
        },
        firstname: {
            type: String
        },
        middlename: {
            type: String
        },
        lastname: {
            type: String
        },
        degree: {
            type: String
        },
        preferredname: {
            type: String
        },
        phone: {
            type: String
        },
        email: {
            type: String,
            
        },
        orcid: {
            type: String
        },
        position: {
            type: String,
           
        },
        institution: {
            type: String
        },
        department: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        postalcode: {
            type: String
        },
        country: {
            type: String,
            
        }

    }
);
const Registration = mongoose.model('registration',registrationSchema);
module.exports = Registration;