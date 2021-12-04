const express = require('express');

const MensRanking = require('../models/mens')
const router = new express.Router();


router.post("/mens", async (req, res) => {
    try {
      const addMensRecord = new MensRanking(req.body);
  
      const result = await addMensRecord.save();
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send(e); //Bad request
    }
  });
  
  
  
  router.get("/mens", async (req, res) => {
    try {
  
      const result = await MensRanking.find().sort({"ranking":1});
      res.send(result);
    } catch (e) {
      res.status(400).send(e); //Bad request
    }
  });
  
  
  //For Individual
  router.get("/mens/:getbyranking", async (req, res) => {
    try {
      const rank = req.params.getbyranking;
      const result = await MensRanking.find({ranking:rank});
      res.send(result);
    } catch (e) {
      res.status(400).send(e); //Bad request
    }
  });
  
  
  
  router.patch("/mens/:getbyranking", async (req, res) => {
    try {
      const rank = req.params.getbyranking;
      const result = await MensRanking.updateOne({ranking:rank},req.body,{new:true});
      console.log(result);
      res.send(result);
    } catch (e) {
      res.status(500).send(e);            // Server Error
    }
  });
  
  
  
  router.delete("/mens/:getbyranking", async (req, res) => {
    try {
      const rank = req.params.getbyranking;
      const result = await MensRanking.deleteOne({ranking:rank});
      console.log(result);
      res.send(result);
    } catch (e) {
      res.status(500).send(e);            // Server Error
    }
  });

  module.exports = router;
  