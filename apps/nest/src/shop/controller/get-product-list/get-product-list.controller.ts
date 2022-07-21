import {Controller, Get} from "@nestjs/common";
import {GetProductListService} from "../../services/get-product-list/get-product-list.service";
import {Product} from "../../domain/products";


@Controller('/products')
export class GetProductListController {
  constructor(private readonly service:  GetProductListService){
  }
  @Get('')
  getProduct() : Product[] {
    return this.service.getProducts()
  }
}
