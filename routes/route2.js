const express = require("express");
import {
  addUser
} from "../controllers/Users.js";

// Async function for selecting data
// async function getUser() {
//   let connection;
//   const selectQuery = "SELECT * FROM users;";

//   try {
//     // Get a connection from the pool
//     const connection = await mysql_pool.getConnection();

//     // Execute the query to insert data
//     const [results] = await connection.execute(selectQuery);

//     console.log('Data retrieval successfully:', results);
//     return results;
//   } catch (error) {
//     console.error('Error in retrieving data:', error.message);
//     throw error; // Throw the error to be caught by the calling code
//   } finally {
//     if (connection) {
//       // Release the connection back to the pool
//       connection.release();
//     }
//   }
// }

// // Async function for inserting data
// async function insertData(id, email, nama, password, salt) {
//     let connection;
//     const insertQuery = "INSERT INTO akun (account_id, email, nama, password, salt) VALUES (?, ?, ?, ?, ?)";
  
//     try {
//       // Get a connection from the pool
//       const connection = await mysql_pool.getConnection();
  
//       // Execute the query to insert data
//       const [results] = await connection.execute(insertQuery, [id, email, nama, password, salt]);
  
//       console.log('Data insertion successfully:', results);
//       return results;
//     } catch (error) {
//       console.error('Error in inserting data:', error.message);
//     //   console.error(id, email, nama, password, salt);
//       throw error; // Throw the error to be caught by the calling code
//     } finally {
//       if (connection) {
//         // Release the connection back to the pool
//         connection.release();
//       }
//     }
//   }

// API for get all data in table
router.get("/getData", async (req, res) => {
    try {
        const selectResult = await getData();
        res.header('Content-Type', 'application/json');
        console.log('Data retreival was successful!', selectResult);
        res.status(200).json({
            message: 'Success to retrieve data',
            data: selectResult
        })
      } catch (error) {
        // Handle the error here
        res.header('Content-Type', 'application/json');
        res.status(500).json({
            message: 'Failed to retrieve data',
            reason: error.message
        })
      }
})

// API for inserting data to table
router.post("/register", async (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const nama = req.body.nama;
    const password = req.body.password;
    const salt = "xxx";

    console.log(req.body);
    try {
        const insertResult = await insertData(id, email, nama, password, salt);
        res.header('Content-Type', 'application/json');
        res.status(200).json({
            message: 'Success to insert data',
            result: insertResult
        })
    } catch (error) {
        console.error('Failed to insert data:', error.message);
        res.header('Content-Type', 'application/json');
        res.status(500).json({
            message: 'Failed to insert data',
            reason: error.message
        })
    }
});


export default router;