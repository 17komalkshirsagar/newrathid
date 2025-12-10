const multer = require("multer");


const Storage = multer.memoryStorage();

const Upload = multer({
    storage: Storage,
    limits: { fileSize: 20 * 1024 * 1024 },
}).any();

module.exports = { Upload };
