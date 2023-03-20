import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from './entity/product.entity'
import { ProductResolver } from './product.resolver'
import { ProductService } from './product.service'

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity])],
	providers: [ProductResolver, ProductService]
})
export class ProductModule {}
