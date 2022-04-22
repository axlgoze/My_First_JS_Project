//archivo principal del proyecto

//importando clase
const MissionCommander = require('./app/missionCommander')

//instanciando objetos

const linus = new MissionCommander("Linus");
const assimov = new MissionCommander("Assimov");
const nikola = new MissionCommander("Nikola");
//imprimiendo objetos
console.log(linus.name);
console.log(assimov.name);
console.log(nikola.name);
