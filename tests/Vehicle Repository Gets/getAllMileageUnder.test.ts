import VehicleRepository, { Vehicle } from "../../repositories/vehicle-repository";
import fs from "fs";

const repo = new VehicleRepository();

const file = fs.readFileSync("./repositories/vehicles.json", "utf8");
const vehicles: Vehicle[] = JSON.parse(file);

test('getAllMileageUnder returns a non-empty array for a sensible input', () => {
    let result = repo.getAllMileageUnder("50000");
    expect(result.length).toBeGreaterThan(0);
})

test('getAllMileageUnder returns the expected data where all cars should be included', () => {
    let result = repo.getAllMileageUnder("100000000000");
    expect(result.length).toEqual(vehicles.length);
    expect(result).toEqual(vehicles);
})

test('getAllMileageUnder returns a clear error message for a NaN mileage', () => {
    let result = repo.getAllMileageUnder("cade");
    expect(result).toEqual("Invalid Mileage");
})

test('getAllMileageUnder returns a clear error message for a negative mileage', () => {
    let result = repo.getAllMileageUnder("-6000");
    expect(result).toEqual("Invalid Mileage");
})