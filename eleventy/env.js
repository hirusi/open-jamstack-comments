module.exports = {
	isNodeProduction: process.env.NODE_ENV === "production",
	isNodeDevelopment: process.env.NODE_ENV === "development",
	is11tyProduction: process.env.ELEVENTY_ENV === "production",
	is11tyStaging: process.env.ELEVENTY_ENV === "staging"
};
