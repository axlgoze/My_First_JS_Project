//importando clase
const MissionCommander = require('./../app/missionCommander');
//description of the test
describe("Unit Tests for MissionCommander Class", () => {
	test('1) Create a mission commander object', () => {
	//código
		const myMissionCommander = new MissionCommander("Woopa") //instanciando objeto de clase
		//expect = propiedad a probar_______toBe() = valor que se espera obtener
		expect(myMissionCommander.name).toBe("Woopa");
	});
})
