"use strict";
const Models = require("../models");

const axios = require('axios')

const getAsoiafs = async (req, res) => {
    await axios
    .get("https://anapioficeandfire.com/api/houses/")
    .then((response) => {
      console.log(response.data)
      res.status(200).send({ result: 200, data: response.data })
      .json(response.data);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ result: 500, error: err.message });
      });
};

// const getAsoiaf = (res) => {
//   Models.Asoiaf.findAll({})
//     .then((data) => {
//       res.status(200).send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.satus(500).send({ result: 500, error: err.message });
//     });
// }

module.exports = {getAsoiafs}