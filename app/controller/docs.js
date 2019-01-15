'use strict'
import docModel from '../models/docs'

const docAction = {
  async createDoc(req, res, next) {
    let doc
    let docs = []
    for(let i = 0; i <= 30; i++) {
      doc = { userId: i, docName: req.body.docName }
      docs.push(doc)
    }
    const result = await docModel.insertMany(docs)
    res.send(result)
  },
  async show(req, res, next) {
    let page = req.query.page || 1
    
    const query = await docModel.find().skip((page-1)*10).limit(10)
    const queryCount = await docModel.count()
    res.send({ result: query, queryNumber: queryCount, currentpage: page, })
    
  }
}

export default docAction