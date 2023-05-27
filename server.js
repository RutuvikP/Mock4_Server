const json=require("json-server");
const cors=require('cors')
const server=json.create();
const router=json.router('db.json');
const middleware=json.defaults();

server.use(cors());
server.use(middleware);
server.use("",router);
server.listen(8080,()=>{
    console.log("Running");
})