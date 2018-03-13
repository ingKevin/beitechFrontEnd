import { ProductModel } from './product.model';

export class ClientModel {
  public id: number;
  public name: string;
  public email: string;
  public products: ProductModel[];
}
