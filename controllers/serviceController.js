var mongoose = require('mongoose');
const Records = require("./../models/records.js") // new

module.exports = class ServiceClass {
    
    async fetchRecords(payloadData) {


        // BUSINESS LEVEL VALIDATION //

        // START AND END DATE //
        // -> Setting start date at the beginning of day and end date time as end of day //
        var startDate = new Date(payloadData.startDate);
        startDate.setHours(0,0,0,0);
        var endDate = new Date(payloadData.endDate);
        endDate.setHours(23,59,59);
        
        let data = Records.aggregate([
            {
                $match: {
                    createdAt : { $gte: new Date(startDate) , $lte: new Date(endDate) }
                }
            },
            {
                $project: {
                    key: 1,
                    createdAt:1,
                    totalCount: { $sum: "$counts"},
                }
            },
            {
                $match: { totalCount: { $gte: Number(payloadData.minCount), $lte: Number(payloadData.minCount) } }
            }
        ]);
        
		return data;
	}
}