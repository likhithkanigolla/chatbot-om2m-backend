var express = require("express");
var router = express.Router();
var axios = require("axios");
var config = require("../config/keys");



//const { executeQuery } = require("C:\Users\LENOVO\Desktop\IIIT_chatbot\scrc-chat-bot\queries.js");   
const { Pool } = require("pg"); // Import the PostgreSQL Pool
const queries = require("./queries.js");
//const axios = require("axios");

const baseUrl = "http://localhost:4000";

const vertical = "airQuality"; // Replace with your desired vertical
const operation = "min"; 

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "dasboarddb_07082023",
  password: "root123",
  port: 5432, // Your database port
});



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


// /<AE>/<container>/
router.get("/data/:AE/:container/:container2", async function (req, res, next) {
  try {
    let AE = req.params.AE;
    let container = req.params.container;
    let container2 = req.params.container2;
    let descriptor = "";
    let data = "";

    let res_desc = await axios.get(
      `${config.URL}/~/in-cse/in-name/${AE}/${container}/${container2}/Descriptor/la`,
      {
        headers: {
          "X-M2M-Origin": `${config.username}:${config.password}`,
          Accept: "application/json",
          AccessControlAllowOrigin: "*",
        },
      }
    );

    let final = res_desc.data["m2m:cin"]["con"];
    descriptor = final
      .split("Data String Parameters")[1]
      .split("val=")[1]
      .split("]")[0]
      .split("[")[1]
      .split(",");

    // Now do axios call to get data
    let res_data = await axios.get(
      `${config.URL}/~/in-cse/in-name/${AE}/${container}/${container2}/Data/la`,
      {
        headers: {
          "X-M2M-Origin": `${config.username}:${config.password}`,
          Accept: "application/json",
          AccessControlAllowOrigin: "*",
        },
      }
    );

    final = res_data.data["m2m:cin"]["con"];
    // there are nan values in data, so replace them with 0. final is the array of data in string format
    data = JSON.parse(final.replace(/nan/g, '"nan"'));

    // descriptor is array of keys and data is array of values, make a final object
    // let data_desc = {};
    // for (let i = 0; i < descriptor.length; i++) {
    //   data_desc[descriptor[i]] = data[i];
    // }
    // same as above
    let data_desc = Object.fromEntries(
      descriptor.map((key, i) => [
        key.replace("'", "").replace(/\s/g, ""),
        data[i],
      ])
    );

    return res.status(200).json(data_desc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

router.get("/data/:AE/:container", async function (req, res, next) {
  try {
    let AE = req.params.AE;
    let container = req.params.container;
    let descriptor = "";
    let data = "";

    let res_desc = await axios.get(
      `${config.URL}/~/in-cse/in-name/${AE}/${container}/Descriptor/la`,
      {
        headers: {
          "X-M2M-Origin": `${config.username}:${config.password}`,
          Accept: "application/json",
          AccessControlAllowOrigin: "*",
        },
      }
    );

    let final = res_desc.data["m2m:cin"]["con"];

    descriptor = final
      .split("Data String Parameters")[1]
      .split("val=")[1]
      .split("]")[0]
      .split("[")[1]
      .split(",");

    // Now do axios call to get data
    let res_data = await axios.get(
      `${config.URL}/~/in-cse/in-name/${AE}/${container}/Data/la`,
      {
        headers: {
          "X-M2M-Origin": `${config.username}:${config.password}`,
          Accept: "application/json",
          AccessControlAllowOrigin: "*",
        },
      }
    );

    final = res_data.data["m2m:cin"]["con"];
    // there are nan values in data, so replace them with 0. final is the array of data in string format
    data = JSON.parse(final.replace(/nan/g, '"nan"'));

    // descriptor is array of keys and data is array of values, make a final object
    // let data_desc = {};
    // for (let i = 0; i < descriptor.length; i++) {
    //   data_desc[descriptor[i]] = data[i];
    // }
    // same as above
    let data_desc = Object.fromEntries(
      descriptor.map((key, i) => [
        key.replace("'", "").replace(/\s/g, ""),
        data[i],
      ])
    );

    return res.status(200).json(data_desc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

// router.get("/pg/:type/:agg", async function (req, res, next) {
//   let type = req.params.type;
//   let agg = req.params.agg;

//   let query = queries[type][agg];
// })

// router.get("/pg", async function (req, res, next) {
//   try {
//     // Define your SQL query directly here
//     const query = "SELECT * FROM data_airqualitydatalatest LIMIT 100"; // Replace with your actual table name and query

//     // Execute the query using the PostgreSQL connection pool
//     const client = await pool.connect();
//     const result = await client.query(query);
//     client.release(); // Release the client to the pool

//     // Send the query result as JSON response
//     return res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "An error occurred" });
//   }
// });




router.get("/pg/:vertical/:operation/:building", async function (req, res, next) {
  try {
    const { vertical, operation, building } = req.params;

    // Fetch data from PostgreSQL using axios
    //const query = queries.executeQuery(vertical, operation);
    let query;
    if (operation === "building" && building) {
      //query = queries.executeQuery(vertical, operation, [`%${building}_____`]);
      query = queries.executeQuery(vertical, operation, [`%${building}_____`]);
    } else { 
   query = queries.executeQuery(vertical, operation);
    }
    
    // Execute the query using the PostgreSQL connection pool
    const client = await pool.connect();
    const result = await client.query(query);
    client.release(); // Release the client to the pool

    // Send the query result as JSON response
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred" });
  }
});


module.exports = router;






