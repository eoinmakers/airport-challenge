class Weather {
	constructor() {
		this.conditions = ["stormy", "sunny", "sunny", "sunny"];
	}

	// get forecast() {
	// 	return this.checkForecast();
	// }

	getForecast() {
		return this.conditions[Math.floor(Math.random() * this.conditions.length)];
	}
}