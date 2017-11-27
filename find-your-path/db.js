var mysql = require('mysql');

var con = mysql.createConnection({
    host: "findyourpath.c4q5kqb9rs5a.us-east-2.rds.amazonaws.com",
    user: "fyp",
    password: "findyourpass",
    database: "findyourpath"

});

con.connect(function(err, data)
{
    if (err)
    {
        console.log("error connection to db");
        throw err;
    }
    else
    {
        console.log("success connection to db");
        console.log(data);
    }    
});

module.exports = con;