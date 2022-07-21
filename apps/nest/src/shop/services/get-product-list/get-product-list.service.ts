import {Injectable} from "@nestjs/common";
import {Product} from "../../domain/products";

@Injectable()
export class GetProductListService {

  getProducts(): Product[]{
    return [{
      id: 'm1233-123',
      name: 'milk',
      weight: 12,
    },
      {
        id: 'm1233-123',
        name: 'chocolat',
        weight: 12,
      }
    ]
  }
}
