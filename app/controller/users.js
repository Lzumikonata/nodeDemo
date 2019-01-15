import userSession from '../services/users'
import csv from 'fast-csv'
import fs from 'fs'

const userAction = {
  initUsers: async () => {
    const initResult = await userSession.insertUsers()
  //  res.send({ result: initResult })
  },
   dowloadCSV: async (req, res,getTitle,fileName) => {
    const userData = await userSession.findUsers()
     let stream = null
     let argus = process.argv.splice(2)
     if(!argus || argus.length === 0) {
       stream = fs.createWriteStream(__dirname+'/temp.csv') }
     else{
       stream = fs.createWriteStream(argus[0])
     }
     
     fs.open(__dirname+'/temp.csv', 'r', (err, fd) => {
       if(null) {
         console.log('ok')
       }
       
     })
     //console.log(stream)
     stream.on("finish", () => {
       res.download(__dirname + '/temp.csv', fileName+'.csv', (err) => {
        // fs.unlinkSync(__dirname+'/temp.csv'); //删除临时文件
         if(err) {console.log(err) } else {
           console.log('ok?')
         }
         res.end()
       })
     })
     let csvStream = csv.format({headers: true})
       .transform(getTitle)
     csvStream.pipe(stream)
     userData.forEach(function(row){
       csvStream.write(row)
     })
     
  
     csvStream.end(function(){
       console.log("end")
      // res.send({ path: 'xxx' })  该句是json格式的，所以在发送文件之后再发送这个导致响应头变化，一直报Can't set headers after they are sent
     })
   }
  
}

export default userAction