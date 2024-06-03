import express, { Express, Request, Response } from "express";
import VehicleRepository, { Vehicle } from "./repositories/vehicle-repository";

const app: Express = express();
const port = 3000;

const repo = new VehicleRepository();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

//Returns all cars from the vehicle repository
app.get("/vehicles/all", (req: Request, res: Response) => {
  try{
    const all: Vehicle[] = repo.getAll(); 
    res.send(all);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
  
});

//Returns all cars from the vehicle repository with the given make
app.get("/vehicles/make/:make", (req: Request, res: Response) => {
  try{
    const byMake: Vehicle[] = repo.getByMake(req.params.make) 
    res.send(byMake);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
});

//Returns all cars from the vehicle repository with the given model
app.get("/vehicles/model/:model", (req: Request, res: Response) => {
  try{
    const byModel: Vehicle[] = repo.getByModel(req.params.model) 
    res.send(byModel);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
});

//Returns all cars from the vehicle repository with the given make and model
app.get("/vehicles/makeandmodel/:make/:model", (req: Request, res: Response) => {
  try{
    const byMakeAndModel: Vehicle[] = repo.getByMakeAndModel(req.params.make, req.params.model) 
    res.send(byMakeAndModel);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
});

//Returns all cars from the vehicle repository first registered on or after the given year
app.get("/vehicles/registeredafter/:year", (req: Request, res: Response) => {
  try{
    const registeredAfter: Vehicle[] | string = repo.getAllRegisteredAfter(req.params.year) 
    res.send(registeredAfter);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
});

//Returns all cars from the vehicle repository first registered on or after the given year
app.get("/vehicles/mileageunder/:mileage", (req: Request, res: Response) => {
  try{
    const mileageUnder: Vehicle[] | string = repo.getAllMileageUnder(req.params.mileage) 
    res.send(mileageUnder);
  }

  catch(error){
    res.send(sanitizeError(error));
  }
});


app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});

//Error will be an unknown type - could be a "proper" error with a message attribute, but otherwise
//we should stringify, as we don't know if the message attribute necessarily exists
const sanitizeError = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}