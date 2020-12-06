const mongoose = require('mongoose');
const newsubmissionSchema = new mongoose.Schema(
    {
        
        article_type: {
            type: String
        },
        title: {
            type: String
        },
        authorsData:[
           {
                auth_firstname:String,
                auth_lastname:String,
                auth_middlename:String, 
                author_email:String,
                degree:String,
                affiliation:String
        }
        ]
        ,
        comments:{
            type:String
        },
        checkauthor:
        {
            type:Boolean,
            default:false
        }
        ,
        isDualPublicationStatement:{
            type:Boolean,
            default:false
        },
        isFunded:{
            type:Boolean,
            default:false
        }
        
    }
);
const Newsubmission = mongoose.model('newsubmission',newsubmissionSchema);
module.exports = Newsubmission;