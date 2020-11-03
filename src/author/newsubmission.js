const mongoose = require('mongoose');
const newsubmissionSchema = new mongoose.Schema(
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
const Newsubmission = mongoose.model('newsubmission',newsubmissionSchema);
module.exports = Newsubmission;