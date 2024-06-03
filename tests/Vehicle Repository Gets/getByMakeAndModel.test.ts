import VehicleRepository from "../../repositories/vehicle-repository";

const repo = new VehicleRepository();

test('getByMakeAndModel returns a non-empty array', () => {
    let result = repo.getByMakeAndModel("renault","clio");
    expect(result.length).toBeGreaterThan(0);
})

test('getByMakeAndModel is capitalisation agnostic', () => {
    let result = repo.getByMakeAndModel("RenAULT","CLiO");
    expect(result.length).toBeGreaterThan(0);
})

test('getByMakeAndModel returns an empty array for an imaginary car', () => {
    let result = repo.getByMakeAndModel("Cade Motors","Cademobile");
    expect(result.length).toEqual(0);
})