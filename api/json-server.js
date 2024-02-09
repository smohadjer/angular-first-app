const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
	const jsonPath = path.join(process.cwd(), 'db.json');
  console.log(jsonPath);
	const jsonFile = fs.readFileSync(jsonPath, 'utf8');
	const json = JSON.parse(jsonFile);
	return res.status(200).json(json);
}
