const _ = require('lodash');
const data = require('./datasources/data.json');
const fs = require('fs');

const ops = _.uniq(_.flatten(data.map(item => item.category))).map(item => {
    const key = item.replaceAll(" ", "_").replaceAll("-", "_").replaceAll("'", "").replaceAll("&", "").toUpperCase().replaceAll("__", "_")
    return key;
})

fs.writeFileSync("options.json", JSON.stringify(ops))