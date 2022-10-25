import House from "./oop.js";
import { BaseLogger } from "./oop3.js";

console.log("--------------");
class HouseService {
  constructor(logger) {
    this.houses = [];
    this.logger = logger;
  }

  list(filterCb) {
    console.log(
      filterCb !== undefined ? this.house.filter(filterCb) : this.house
    );
  }
  add(house) {
    this.houses.push(house);
    this.logger.log("Yeni bir ev eklendi", house);
  }
}

const logger = new BaseLogger();
const houseService = new HouseService(logger);
const newHouse = new House(3, 2, "Kuzey", 100, 5000);
houseService.add(newHouse);
const newHouse2 = new House(3, 2, "Guney", 100, 5000);
