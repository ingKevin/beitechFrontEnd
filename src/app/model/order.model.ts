import { ProductModel } from './product.model';
import { ClientModel } from './client.model';

export class OrderModel {
  public orderId: number;
  public date: Date;
  public address: string;
  public price: number;
  public client: ClientModel;
  public products: ProductModel[];
}
