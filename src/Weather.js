class Weather {
	constructor() {
		this.conditions = ["stormy", "sunny", "sunny", "sunny"];
	}

	getForecast() {
		return this.conditions[Math.floor(Math.random() * this.conditions.length)];
	}
}