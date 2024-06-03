var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/predict", (req, res) => {
  // Access the data sent from the frontend in req.body
  const userInput = req.body.message;

  // Process the user input as needed
  // For example, you can simply log it for now
  console.log("Received user input:", userInput);

  // You can also perform any other processing or validation here

  // Send a response back to the frontend (optional)
  res.json({ message: "Data received and processed successfully" });
});


module.exports = router;
