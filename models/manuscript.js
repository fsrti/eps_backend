const mongoose = require('mongoose');
const manuscriptSchema = new mongoose.Schema(
    {
        article_type: {
            type: String
        },
        title: {
            type: String
        },
        
        auth_firstname: {
            type: String
        },
        auth_middlename: {
            type: String
        },
        auth_lastname: {
            type: String
        },
        auth_degree: {
            type: String
        },
        auth_affiliation: {
            type: String
        },
        auth_email: {
            type: String,
            
        }
        
    }
);
const Manuscript = mongoose.model('manuscript',manuscriptSchema);
module.exports = Manuscript;