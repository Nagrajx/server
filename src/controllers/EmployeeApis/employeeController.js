const Employee = require("../../model/employee_model");

async function addEmployee(req, res) {

    try {
        const { name, email, mobile, department, designation } = req.body;

        if (!name || !email || !mobile || !department || !designation) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const employee = await Employee.create({
            name,
            email,
            mobile,
            department,
            designation,
        });

        res.status(201).json({
            success: true,
            message: "Employee Added Successfully",
            employee,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


async function getEmployees(req, res) {

    try {
        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            count: employees.length,
            employees,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

async function updateEmployee (req, res) {

    try {
        const { id } = req.params;

        const employee = await Employee.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee Updated Successfully",
            employee,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

 async function deleteEmployee(req,res) {
    
 
    try {
        const { id } = req.params;

        const employee = await Employee.findByIdAndDelete(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee }