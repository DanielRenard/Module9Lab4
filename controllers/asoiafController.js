"use strict";
const Models = require("../models");

const axios = require('axios')

const getAsoiaf = async (req, res) => {
    await axios
    .get("https://anapioficeandfire.com/api/houses/")
    .then((response) => {
      console.log(response)
      res.status(200).send({ result: 200, data: data }).json(response.data);
    })
    .catch((err) => {
        console.log(err);
        res.satus(500).send({ result: 500, error: err.message });
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

module.exports = {getAsoiaf}