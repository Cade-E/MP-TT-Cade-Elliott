import VehicleRepository from "../../repositories/vehicle-repository";

const repo = new VehicleRepository();

test('getByModel returns a non-empty array', () => {
    let result = repo.getByModel("clio");
    expect(result.length).toBeGreaterThan(0);
})

test('getByModel is capitalisation agnostic', () => {
    let result = repo.getByModel("CLiO");
    expect(result.length).toBeGreaterThan(0);
})

test('getByModel returns an empty array for an imaginary model', () => {
    let result = repo.getByModel("Cademobile");
    expect(result.length).toEqual(0);
})