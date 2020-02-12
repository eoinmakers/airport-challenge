class Airport {
	constructor(CAPACITY = 1) {
		this.hangar = [];
		this.capacity = CAPACITY;
		this.weather = new Weather();
	}

	land(plane) {
		if(this.weather.getForecast() != "stormy") {
			if(this.hangar.length < this.capacity) {
				this.hangar.push(plane);
			} else {
				throw "MAX CAPACITY REACHED";
			}
		} else {
			throw "STORMY WEATHER DETECTED";
		}
		
	}

	takeOff() {
		if(this.weather.getForecast() != "stormy") {
			this.hangar.pop();
		} else {
			throw "STORMY WEATHER DETECTED";
		}
	}

	catch(e) {
  		console.error(e);
	}

}