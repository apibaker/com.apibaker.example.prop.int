
const apibaker = require('apibaker');
const dbAdapter = apibaker.mysql_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "main_DeleteEnt";
  var actionType = "Delete";
  var entName = "main_Ent";
  
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
  "cmd": "DELETE FROM main_Ent WHERE main_EntId=?",
  "inParam": [
   [
    1,
    "Id",
    "main_EntId",
    "",
    null
   ]
  ]
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
