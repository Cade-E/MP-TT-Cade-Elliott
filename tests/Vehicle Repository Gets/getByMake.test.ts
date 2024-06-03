import VehicleRepository from "../../repositories/vehicle-repository";

const repo = new VehicleRepository();

test('getByMake returns a non-empty array', () => {
    let result = repo.getByMake("Vauxhall");
    expect(result.length).toBeGreaterThan(0);
})

test('getByMake is capitalisation agnostic', () => {
    let result = repo.getByMake("vAuxHALl");
    expect(result.length).toBeGreaterThan(0);
})

test('getByMake returns an empty array for an imaginary make', () => {
    let result = repo.getByMake("Cade Motors");
    expect(result.length).toEqual(0);
})