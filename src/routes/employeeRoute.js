const express = require("express");

const router = express.Router();
const {auth ,isCustomer,isEmployee} = require("../middlwares/authMiddleware");

const {addEmployee, getEmployees,updateEmployee ,deleteEmployee} = require("../controllers/EmployeeApis/employeeController");

router.post("/add", auth,  addEmployee);

router.get("/all", auth,getEmployees);

router.patch("/update/:id", auth, updateEmployee);

router.delete("/delete/:id", auth, deleteEmployee);

module.exports = router;