import fs from "fs";

export type Vehicle = {
  make: string;
  model: string;
  trim: string;
  colour: string;
  co2_level: number;
  transmission: "Manual" | "Automatic"; //Can be extended for additional transmission types E.G. if semi automatic cars were separately categorised
  fuel_type: "Unleaded" | "Diesel"; //Can be extended for additional fuel types, E.G. hybrid / EV 
  engine_size: number;
  date_first_reg: string;
  mileage: number

};

class VehicleRepository {
  private _vehicles: Vehicle[];

  constructor() {
    const file = fs.readFileSync("./repositories/vehicles.json", "utf8");
    this._vehicles = JSON.parse(file);
  }

  getAll(): Vehicle[] {
    return this._vehicles;
  }

  getByMake(make: string): Vehicle[] {
    const upperMake: string = make.toUpperCase();
    
    const filtered = this._vehicles.filter((vehicle: Vehicle) => {
      return vehicle.make === upperMake;
    })

    return filtered;
  }

  getByModel(model: string): Vehicle[] {
    const upperModel: string = model.toUpperCase();
    
    const filtered = this._vehicles.filter((vehicle: Vehicle) => {
      return vehicle.model === upperModel;
    })

    return filtered;
  }

  getByMakeAndModel(make: string, model: string): Vehicle[] {
    const upperMake: string = make.toUpperCase();
    const upperModel: string = model.toUpperCase();
    
    const filtered = this._vehicles.filter((vehicle: Vehicle) => {
      return vehicle.make === upperMake && vehicle.model === upperModel;
    })

    return filtered;
  }

  getAllRegisteredAfter(year: string): Vehicle[] | string {
    if(year.length !== 4 ){return "Invalid Year"};
    
    const numYear: number = parseInt(year);

    if(isNaN(numYear) || numYear > new Date().getFullYear() || numYear < 1900){return "Invalid Year"}
    
    const filtered = this._vehicles.filter((vehicle: Vehicle) => {
      return parseInt(vehicle.date_first_reg.split("/")[2]) >= numYear;
    })

    return filtered;
  }

  getAllMileageUnder(mileage: string): Vehicle[] | string {
    
    const numMileage: number = parseInt(mileage);

    if(isNaN(numMileage) || numMileage < 0){return "Invalid Mileage"}
    
    const filtered = this._vehicles.filter((vehicle: Vehicle) => {
      return vehicle.mileage <= numMileage;
    })

    return filtered;
  }
}

export default VehicleRepository;
