const mysql = require("mysql")

const DB_HOST=process.env.DB_HOST || 'localhost';
const DB_USER=process.env.USER || 'root';
const DB_PASSWORD=process.env.DB_PASSWORD || '';
const DB_DBASE=process.env.DB_DBASE || 'testvocacionalbd';
const DB_PORT=process.env.DB_PORT || 3306;

module.exports = () => {
    return mysql.createConnection({
        host:DB_HOST, // "localhost",
        user:DB_USER, // "root",
        password:DB_PASSWORD, // "",
        database:DB_DBASE, // "testvocacionalbd"
        port:DB_PORT
    })
}

// const lista = [ "Ciencia y Tecnologia", "Ciencias ecolog, biolog y salud", 
// "Ciencias economic, administ y financieras", "Arte y Creatividad", "Ciencias Sociales"]
// const conection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"testvocacionalbbdd"
// })
// const consulta = "INSERT into categorias set?";
// conection.query(consulta, {
//     Cat_nombre: lista.forEach(),
//   }, (err, result)=>{
//     if (err == null){
//       console.log("Los datos han sido guardados correctamente");
//   } else{
//       console.log("ERROR!!: "+ err);
//   }
//   })
// conection.connect((err)=>{
//     if(err){
//         console.log("Error: "+ err.message)
//     } else{
//         console.log("La conection fue exitosa")
//     }
// })

// conection.query("SELECT * FROM estudiantes", (err, rows) => {
//     if (err){
//         console.log("Error: "+ err.message)
//     } else{
//         console.log(rows)
//         console.log(rows.length)
//     }
// })

// conection.end()