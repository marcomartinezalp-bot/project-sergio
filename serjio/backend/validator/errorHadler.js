//avisos de error personalizados para validacion de express-validator
const { validationResult } = require("express-validator");
const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = errorHandler; 