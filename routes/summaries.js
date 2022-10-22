var router = require("express").Router();
const summariesCtrl = require("../controllers/summaries")

router.get("/", summariesCtrl.index)
module.exports = router;