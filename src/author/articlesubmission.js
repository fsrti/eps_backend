const mongoose = require('mongoose');
const articlesubmissionSchema = new mongoose.Schema(
    {
        articlename: {
            type: String
        },
        keywords: {
            type: String
        },
        abstract: {
            type: String
        },
        authors:
        {
            type: String
        },
        aboutauthor: {
            type: String
        },
        date: {
            type: Date
        },
        filename:{
            type:String
        }
    }
);
const Articlesubmission = mongoose.model('articlesubmission', articlesubmissionSchema);
module.exports = Articlesubmission;