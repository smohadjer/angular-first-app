const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
	const jsonPath = path.join(process.cwd(), 'src', 'app', 'db.json');
  console.log(jsonPath);
	const jsonFile = fs.readFileSync(jsonPath, 'utf8');
	const json = JSON.parse(jsonFile);
  res.setHeader('Content-Type', 'application/json');
	return res.json(json);
}
