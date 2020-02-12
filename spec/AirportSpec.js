describe("Airport with default capacity", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();

    spyOn(Weather.prototype, 'getForecast').and.returnValue('sunny');
  });

  it("can create an instance of an airport", function() {
     expect(airport instanceof Airport).toBeTruthy()
  });

  it("can land a plane", function() {
    airport.land(plane);
    expect(airport.hangar.length).toEqual(1);
  });

  it("allows a plane to take off", function() {
    airport.land(plane);
    airport.takeOff();
    expect(airport.hangar.length).toEqual(0);
  });

  it("has a default capacity", function() {
    airport.land(plane);
      
    expect(function () {
      airport.land(plane) 
    }).toThrow();
  });
});

describe("Airport with custom capacity", function() {
  it("allows the user to define the capacity", function() {
    airport = new Airport(20);
    plane = new Plane();

    spyOn(Weather.prototype, 'getForecast').and.returnValue('sunny');

    for (var i = 0; i < 20; i++) { 
      airport.land(plane);
    };
    
    expect(function () {
      airport.land(plane) 
    }).toThrow();
  });
});

describe("The weather is stormy!", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();

     spyOn(Weather.prototype, 'getForecast').and.returnValue('stormy');
   });

  it("doesn't allow the plane to take off in stormy weather", function() {
     airport.hangar.push(plane);
    expect(function () {
       airport.takeOff()
    }).toThrow();
   });

  it("doesn't allow the plane to land in stormy weather", function() {
     expect(function () {
      airport.land(plane)
    }).toThrow();
  });
});






