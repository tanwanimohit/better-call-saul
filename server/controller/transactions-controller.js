const Transactions = require("../models/transactions-model");

var CLIENT_ID = process.env.CLIENT_ID;

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(CLIENT_ID);

async function verify(token, req, res) {
  var response = "";
  var user = {};
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    user.userid = payload["sub"];

    response = "success";
    user.email = payload["email"];
    user.name = payload["name"];
    user.picture = payload["picture"];
  } catch (e) {
    //error
    console.log("ierror" + e);
    response = "error";
  } finally {
    if (response == "success") {
      //Setting the Session
      const transaction = await Transactions.find({ user: user.email });
      return res.status(200).json({
        sucsess: true,
        count: transaction.length,
        data: transaction,
      });
    } else {
      return res.status(500).json({
        sucsess: false,
        error: "Server Error,Try After Some Time",
      });
    }
  }
}

// @desc  Get all the transaction
// @routes GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    await verify(req.header("token"), req, res);
  } catch (error) {
    return res.status(500).json({
      sucsess: false,
      error: "Server Error,Try After Some Time",
    });
  }
};

// @desc  Add a transaction
// @routes POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
  try {
    let body = req.body;

    const ticket = await client.verifyIdToken({
      idToken: req.header("token"),
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    body.user = payload["email"];
    const transaction = await Transactions.create(body);
    return res.status(201).json({
      sucsess: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        sucsess: false,
        error: messages,
      });
    } else
      return res.status(500).json({
        sucsess: false,
        error: "Server Error",
      });
  }
};

// @desc  Delete a transaction
// @routes GET /api/v1/transactions
// @access Public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transactions.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        sucsess: false,
        error: "No Transaction Found",
      });
    }

    await transaction.remove();
    return res.status(200).json({
      sucsess: true,
      message: "Transaction Removed",
    });
  } catch (error) {
    return res.status(500).json({
      sucsess: false,
      error: "Server Error",
    });
  }
};
