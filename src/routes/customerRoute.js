const express = require("express");

const router = express.Router();
const {auth ,isCustomer,isEmployee} = require("../middlwares/authMiddleware");

const {addCustomer,getCustomers,updateCustomer,deleteCustomer} = require("../controllers/EmployeeApis/customerController");


router.post("/add", auth,  addCustomer);

router.get("/all", auth, getCustomers);

router.put("/update/:id", auth, updateCustomer);

router.delete("/delete/:id", auth,deleteCustomer);

module.exports = router;