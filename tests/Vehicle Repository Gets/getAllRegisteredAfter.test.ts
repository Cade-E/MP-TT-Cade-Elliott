import VehicleRepository from "../../repositories/vehicle-repository";

const repo = new VehicleRepository();

test('getAllRegisteredAfter returns a non-empty array for a valid year', () => {
    let result = repo.getAllRegisteredAfter("2015");
    expect(result.length).toBeGreaterThan(0);
})

test('getAllRegisteredAfter returns a clear error message for a future year', () => {
    let result = repo.getAllRegisteredAfter("2030");
    expect(result).toEqual("Invalid Year");
})

test('getAllRegisteredAfter returns a clear error message for a distant past year (pre car registration)', () => {
    let result = repo.getAllRegisteredAfter("1666");
    expect(result).toEqual("Invalid Year");
})

test('getAllRegisteredAfter returns a clear error message for an incorrect length year', () => {
    let result = repo.getAllRegisteredAfter("cade elliott");
    expect(result).toEqual("Invalid Year");
})

test('getAllRegisteredAfter returns a clear error message for a NaN parsing year', () => {
    let result = repo.getAllRegisteredAfter("cade");
    expect(result).toEqual("Invalid Year");
})


test('getAllRegisteredAfter returns an empty array for a year with no vehicles matching', () => {
    let result = repo.getAllRegisteredAfter("2023");
    expect(result.length).toEqual(0);
})