

const apibaker = require('apibaker')
const dbAdapter = apibaker.mysql_adapter;

const setupSchema = function(conn, succ, err) {
  var sql = [
 "CREATE SCHEMA IF NOT EXISTS  simple_app;",
 "USE  simple_app ;",
 "SET foreign_key_checks = 0;",
 "drop table  if exists Main_Ent;",
 "CREATE TABLE Main_Ent(Main_EntId BIGINT NOT NULL AUTO_INCREMENT ,Prop1 INT, CONSTRAINT  PRIMARY KEY (MAIN_ENTID)) ENGINE=InnoDB ;",
 "SET foreign_key_checks = 1;"
]
  dbAdapter.runSql(conn, sql, succ, err)
}

const database = require('./database.js');
const dbconn = dbAdapter.connect("simple_app", database);

setupSchema (dbconn, function(res){
  console.log("database setup successfully!")
  dbAdapter.disconnect("simple_app", dbconn)
}, function(error){
  console.log(error)
  dbAdapter.disconnect("simple_app", dbconn)
})


