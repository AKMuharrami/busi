const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
// const client = await pool.connect()
// input values
app.put("/admin/staff", async (req, res) => {
    try {
        console.log(req.body)
        const {adminstration } = await req.body
        const {admin_name, admin_email, admin_password} = adminstration
        const newadminstration = await pool.query("INSERT INTO adminstration (admin_name, admin_email, admin_password) VALUES ($1, $2, $3) RETURNING *", [admin_name, admin_email, admin_password]);
        return res.json(newadminstration.rows[0]);
    }   
     catch (err) {
        console.error(err.message);
    }
});
app.put("/admin/products", async (req, res) => {
    try {
        const {product} = req.body;
           const {product_name, product_img, product_price, product_details} = product
        // contains the products table details to be added
        const newproducts = await pool.query("INSERT INTO products (product_name, product_img, product_price, product_details) VALUES($1, $2, $3, $4) RETURNING *", [product_name, product_img, product_price, product_details]);
        return res.json(newproducts.rows[0])
    } catch (err) {
         console.error(err.message);
    }
});
app.put("/user/register", async (req, res) => {
    try {
        const {customer} = req.body;
           const {customer_name, customer_email, customer_password} = customer
        // contains the customers table details to be added
        const newcustomer = await pool.query("INSERT INTO customers (customer_name, customer_email, customer_password) VALUES($1, $2, $3) RETURNING *", [customer_name, customer_email, customer_password]);
        return res.json(newcustomer.rows[0])
    } catch (err) {
         console.error(err.message);
    }
});

// get values
app.get("/admin/staff", async (req, res) => {
    try {
        const AllStaff = await pool.query("SELECT * FROM adminstration");
        res.json(AllStaff.rows);
        console.log(AllStaff.rows);
    } catch (err) {
         console.error(err.message);
    }
});
// app.get("/admin/products", async (req, res) => {
//     try {
//         const AllProducts = await pool.query("SELECT * FROM products");
//         res.json(AllProducts.rows);
//     } catch (err) {
//          console.error(err.message);
//     }
// });
// app.get("/admin/customers", async (req, res) => {
//     try {
//         const AllCustomers = await pool.query("SELECT * FROM customers");
//         res.json(AllCustomers.rows);
//     } catch (err) {
//          console.error(err.message);
//     }
// });
// filter values
// app.get("/admin:", async (req, res) => {
//     try {
        
//     } catch (err) {
        //  console.error(err.message);
//     }
// });
// app.get("/search:", async (req, res) => {
//     try {
        
//     } catch (err) {
        //  console.error(err.message);
//     }
// });
// // update values
// app.put("/admin:", async (req, res) => {
//     try {
        //  console.error(err.message);
//     } catch (err) {
        
//     }
// });
// app.put("/product:", async (req, res) => {
//     try {
        
//     } catch (err) {
        //  console.error(err.message);
//     }
// });
app.listen(5000, () => {
    console.log("server is running on port 5000")
});
