const mongoose = require('mongoose');
const articlefilesubmissionSchema = new mongoose.Schema(
    {
        filename: {
            type: String
        },
        avatar: {
            type: String
        },
        cloudinary_id: {
            type: String
        }

    }
);
const articleFilesubmission = mongoose.model('articlefilesubmission', articlefilesubmissionSchema);
module.exports = articleFilesubmission;