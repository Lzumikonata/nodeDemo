const sessionCotroller = {
    getList: (req, res) => {
      console.log('err?')
      const result = {'name': '1', 'uid': 2}
      res.send(result)
    }
}
module.exports = sessionCotroller