const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountriesByid = require("../controllers/getCountriesById.js");
const getCountriesByName = require("../controllers/getCountriesByName")
const router = Router();

router.get("/", (req, res) => {
    getCountries(req, res);
})
router.get("/:idPais", (req, res) => {
    getCountriesByid(req, res);
})
router.get("/name/nombre", (req, res) => {
    getCountriesByName(req, res);
})


module.exports = router;
