import VehicleRepository, { Vehicle } from "../../repositories/vehicle-repository";
import fs from "fs";

const repo = new VehicleRepository();

const file = fs.readFileSync("./repositories/vehicles.json", "utf8");
const vehicles: Vehicle[] = JSON.parse(file);

test('getAll returns a non-empty array', () => {
    let result = repo.getAll();
    expect(result.length).toBeGreaterThan(0);
})

test('getAll returns the expected data', () => {
    let result = repo.getAll();
    expect(result.length).toEqual(vehicles.length);
    expect(result).toEqual(vehicles);
})