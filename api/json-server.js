const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
	const jsonPath = path.join(process.cwd(), 'src', 'app', 'db.json');
	const jsonFile = fs.readFileSync(jsonPath, 'utf8');
	const json = JSON.parse(jsonFile);
  res.setHeader('Content-Type', 'application/json');
  const id = req.query.id;
  console.log('id:', id);
  // id can be 0 so we test against undefined
  if (id !== undefined) {
    const location = json.locations.filter(item => item.id === parseInt(id));
    return res.json(location);
  } else {
    return res.json(json);
  }
}
