const utils = require("../utils");
const { parseISO, format, formatISO } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

module.exports = {
	prepareDate: d => {
		// format() expects Date or Number
		// YAML dates are already in ISO8601 and it gives us dates in UTC.
		// They may be a string or an object.
		// If string, convert to ISO date object first.
		// If an object, no need to do anything. We can directly format it.
		switch (typeof d) {
			case "string":
				return parseISO(d);
			case "object":
			default:
				return d;
		}
	},
	friendlyDate: d => {
		const date = utcToZonedTime(
			module.exports.prepareDate(d),
			"Asia/Kolkata"
		);
		return format(date, "d MMMM yyyy");
	},
	dateInISO8601: d => {
		return formatISO(module.exports.prepareDate(d));
	},
	lastUpdatedDate: collection => {
		if (!collection || !collection.length) {
			throw new Error(
				"Collection is empty in rssLastUpdatedDate filter."
			);
		}

		// Newest date in the collection
		return module.exports.dateInISO8601(collection[0].date);
	}
};
