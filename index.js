const fs = require('fs')
const csv = require('csvtojson')

const csv_path = './customer-data.csv'
const json_path = './customer-data.json'

fs.unlink(json_path, (err) => {
	//if (err) throw err
	csv().fromFile(csv_path).then((data) => {
		fs.writeFile(json_path, JSON.stringify(data, undefined, 2))
	})
})
