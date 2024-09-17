export interface Property {
  id: number;
  type: string;
  projectInfo: {
    project: string;
    developer: string;
    location: string;
  };
  price: number;
  area: number;
  noBeds: number;
  noBaths: number;
}
