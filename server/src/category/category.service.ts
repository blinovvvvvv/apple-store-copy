import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoryEntity } from './entity/category.entity'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly categoryRepository: Repository<CategoryEntity>
	) {}

	async createCategory(dto: CreateCategoryDto) {
		const category = await this.categoryRepository.create({
			name: dto.name,
			slug: dto.slug
		})
		return this.categoryRepository.save(category)
	}

	async getCategory() {
		return await this.categoryRepository.find({
			relations: {
				products: true
			}
		})
	}

	async getCategoryBySlug(slug: string) {
		return await this.categoryRepository.findOne({
			where: {
				slug
			},
			relations: {
				products: true
			}
		})
	}
}
