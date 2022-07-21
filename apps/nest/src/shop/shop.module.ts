import {Module} from "@nestjs/common";
import {GetProductListController} from "./controller/get-product-list/get-product-list.controller";
import {GetProductListService} from "./services/get-product-list/get-product-list.service";


@Module({
  controllers: [GetProductListController],
  providers:[GetProductListService],
})
export class ShopModule {
}
