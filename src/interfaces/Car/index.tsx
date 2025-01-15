export interface CarPlate {
  mainCode: string[];
  cityCode: number;
}

export interface CarInsurance {
  plate: CarPlate;
  insuranceCompany: string;
  brand: string;
  model: string;
}
