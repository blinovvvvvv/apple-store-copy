import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductEntity } from './entity/product.entity'
import { ProductService } from './product.service'

@Resolver()
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Query(() => [ProductEntity])
	product() {
		return this.productService.getAll()
	}

	@Mutation(() => ProductEntity)
	createProduct(@Args('data') data: CreateProductDto) {
		return this.productService.create(data)
	}

	@Mutation(() => Boolean)
	deleteProduct(@Args('id') id: number) {
		return this.productService.deleteProduct(id)
	}

	@Query(() => ProductEntity)
	productBySlug(@Args('slug') slug: string) {
		return this.productService.bySlug(slug)
	}

	@Query(() => [ProductEntity])
	findProduct(@Args('searchTerm') searchTerm: string) {
		return this.productService.findProduct(searchTerm)
	}
}
