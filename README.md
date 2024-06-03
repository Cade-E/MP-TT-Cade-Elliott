## Solution Guide:

Before use, run "npm i" to install dependencies.\
Then, run "npm run dev" to start the dev server.\
Navigate to the URLs described below to access the endpoints.\
Tests can be run using "npm run test". The test suites are written using Jest, and all tests can be found in the tests folder.\

### Tasks
- Add the remaining fields to the vehicle model - Done
- Implement an endpoint for listing all cars - localhost:3000/vehicles/all
- Implement an endpoint for listing cars by make - localhost:3000/vehicles/make/:make - where :make is the make of the car you wish to list
- Implement an endpoint for listing cars by model - localhost:3000/vehicles/model/:model - where :model is the model of the car you wish to list
- Add any other endpoints you think are useful / relevant
  - localhost:3000/vehicles/makeandmodel/:make/:model - Returns a list of cars with the matching make and model, where :make is the make, :model is the model of the car you wish to list
  - localhost:3000/vehicles/registeredafter/:year - Returns a list of cars first registered on or after the given year, where :year is the year
  - localhost:3000/vehicles/mileageunder/:mileage - Returns a list of cars with mileage less than or equal to the given mileage, where :mileage is the mileage
