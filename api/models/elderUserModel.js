'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ElderUserSchema = new Schema({
    idNumber: {
        type: String,
        unique: 'This ID Number already exist.',
        Required: 'Please fill ID Number'
    },
    title: String,
    firstName: String,
    lastName: String,
    age: Number,
    acceptDate: { type: Date, default: Date.now },
    acceptTime: String,
    homeName: String,
    relative: {
        relativeType: String,
        title: String,
        firstName: String,
        lastName: String,
        contractAddress: String,
        relation: String,
        tel: String,
        organizationName: String,
        organizationTel: String
    },
    information: {
        gender: String,
        ethnicity: String,
        religion: String,
        status: String,
        education: String,
        career: String,
        salary: Number,
        medicalPrivilege: String,
        universalHealthInsuranceCardNo: String,
        personality: [String],
        selfHelp: String,
        issue: [String]
    },
    address: [{
            oldAddress: {
                no: Number,
                moo: Number,
                soi: String,
                road: String,
                subDistrict: String,
                district: String,
                province: String,
                zipCode: Number
            }
        },
        {
            currentAddress: {
                no: Number,
                moo: Number,
                soi: String,
                road: String,
                subDistrict: String,
                district: String,
                province: String,
                zipCode: Number
            }
        }
    ]
});

module.exports = mongoose.model('elderUsers', ElderUserSchema);