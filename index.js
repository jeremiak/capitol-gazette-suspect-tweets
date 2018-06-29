const fs = require("fs");
const os = require("os");

const file = fs.readFileSync("./TU_erichartleyfrnd.ndjson").toString();
const lines = file.split(/\n/).filter(line => line && line !== "");
const json = lines.map(line => JSON.parse(line));

fs.writeFileSync("./timeline_erichartleyfrnd.json", JSON.stringify(json));
