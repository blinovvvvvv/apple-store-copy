import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoryEntity } from './entity/category.entity'

@Resolver()
export class CategoryResolver {
	constructor(private readonly categoryService: CategoryService) {}

	@Mutation(() => CategoryEntity)
	createCategory(@Args('data') data: CreateCategoryDto) {
		return this.categoryService.createCategory(data)
	}

	@Query(() => CategoryEntity)
	categoryBySlug(@Args('slug') slug: string) {
		return this.categoryService.getCategoryBySlug(slug)
	}

	@Query(() => [CategoryEntity])
	category() {
		return this.categoryService.getCategory()
	}
}
