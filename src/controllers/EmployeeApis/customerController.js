const  Customer = require("../../model/customer_Model");

async function addCustomer(req,res) {
    
  try {
    const { name, mobile, email, city, status } = req.body;

    if (!name || !mobile || !email || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const customer = await Customer.create({
      name,
      mobile,
      email,
      city,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Customer Added Successfully",
      customer,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


async function getCustomers(req,res) {
    
  try {

    const customers = await Customer.find();

    return res.status(200).json({
      success: true,
      count: customers.length,
      customers,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


async function updateCustomer(req,res) {
  try {

    const { id } = req.params;

    const customer = await Customer.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Customer Updated Successfully",
      customer,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


async function deleteCustomer(req,res) {
    
  try {

    const { id } = req.params;

    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Customer Deleted Successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {addCustomer,getCustomers,updateCustomer,deleteCustomer}