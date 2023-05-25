const json=require("json-server");

const server=json.create();
const middleware=json.defaults();
const router=json.router();

server.use(middleware);
server.use(router,'db.json');
router("/api")
server.listen(8080,()=>{
    console.log("Running");
})