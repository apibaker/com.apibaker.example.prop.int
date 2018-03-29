
const apibaker = require('apibaker');
const dbAdapter = apibaker.mysql_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "Main_CreateEnt";
  var actionType = "Create";
  var entName = "Main_Ent";
  
  var input = prepareInput(param, actionType, entName);
  
  var dbObj = [
 {
  "cmd": "USE  simple_app ;\n",
  "inFrom": true,
  "inSize": true,
  "inParam": [],
  "outResult": [],
  "outMultiple": true,
  "outQuery": true
 },
 {
  "cmd": "INSERT INTO Main_Ent (Prop1) VALUES  (?) ",
  "inParam": [
   [
    1,
    "Integer",
    "Prop1",
    "",
    -1
   ]
  ],
  "outResult": [
   [
    1,
    "Id",
    "Main_EntId",
    "Main_EntId",
    null
   ]
  ],
  "outInsertId": true
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
