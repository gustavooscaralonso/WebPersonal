const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "bng878fwj8fdsfgfj6";

exports.ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ msg: "La peticion no tiene cabecera de autenticacion" });
    }
    const token = req.headers.authorization.replace(/['"]+/g, "");

    try {
        var payload = jwt.decode(token, SECRET_KEY);
        if (payload.exp <= moment.unix()) {
            return res.status(404).send({ msg: "El token ha expirado" });
        }
    } catch (ex) {
        //console.log(ex);
        return res.status(404).send({ msg: "Token invalido" });
    }

    req.user = payload;
    next();
};