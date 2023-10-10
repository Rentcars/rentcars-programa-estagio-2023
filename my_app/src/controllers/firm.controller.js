const db = require('../models')
const Firm = db.firm

exports.create = (req, res) => {
  const resp = {}
  try {
    Firm.build(req.body).save()
    resp.status = "ok"
  } catch (error) {
    resp.status = 'fail'
  }
  res.json(resp)
}

exports.findAll = (req, res) => {
  const resp = {}
  try {
    Firm.findAll()
    .then(e => {
      res.json(e)
    })
  } catch (error) {
    resp.status = 'fail'
    res.json(resp)
  }
}

exports.findOne = (req, res) => {
  const resp = {}
  try {
    Firm.findAll({
      where:{
        id:req.params.id
      }
    })
    .then(e => {
        res.json(e)
    })
  } catch (error) {
    console.log(error)
    resp.status = 'fail'

    res.json(resp)
  }
}

exports.update = (req, res) => {
  const resp = {}
  try {
    Firm.findOne({
      where:{
        id:req.params.id
      }
    })
    .then(e => {
      e.update(req.body)
        
      res.json(e)
    })
  } catch (error) {
    resp.status = 'fail'
    res.json(resp)
  }
}

exports.delete = (req, res) => {
  let resp = {}
  try {
    Campus.destroy({
      where:{
        id:req.params.id
      }
    })
    resp = {
      status:'ok'
    }
  } catch (error) {
    resp.status = 'fail'
    res.json(resp)
  }
  res.json(resp)
}