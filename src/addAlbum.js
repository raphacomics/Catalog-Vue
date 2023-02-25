const fs = require('fs');

const dataFilePath = './catalog.json';

// Read existing data from the file
const data = JSON.parse(fs.readFileSync(dataFilePath));

// Generate a new ID for the album
const newAlbumId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

// Add the new album to the data array
data.push({ id: newAlbumId, name, artist, genre });

// Write the updated data back to the file
fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

console.log(`Added new album with ID ${newAlbumId}`);
