const { Router } = require("express");
const saveActivity = require("../controllers/saveActivities");
const getActivies = require("../controllers/getActivity");
const router2 = Router();


router2.post("/", (req, res) => {
    saveActivity(req, res);
})
router2.get("/", (req, res) => {
    getActivies(req, res);
})

module.exports = router2;