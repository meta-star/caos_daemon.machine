const fs = require('fs');
const path = require('path');

module.exports = () => {
    const dotenvPath = path.join(__dirname, '..', '..', '.env');
    if (!fs.existsSync(dotenvPath) && !process.env.APP_CONFIGURED) {
        throw new Error(".env not exists");
    }

    require('dotenv').config();
}
