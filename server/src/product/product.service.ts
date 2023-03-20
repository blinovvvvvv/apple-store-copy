import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductEntity } from './entity/product.entity'

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productRepository: Repository<ProductEntity>
	) {}

	async getAll() {
		return this.productRepository.find({
			relations: {
				category: true
			}
		})
	}

	async create(dto: CreateProductDto) {
		const product = await this.productRepository.create({
			name: dto.name,
			price: dto.price,
			images: dto.images,
			color: dto.color,
			allColors: dto.allColors,
			storageSize: dto.storageSize,
			ramSize: dto.ramSize,
			slug: dto.slug,
			category: {
				slug: dto.category
			}
		})

		return this.productRepository.save(product)
	}

	async deleteProduct(id: number) {
		await this.productRepository.delete({ id })
		return true
	}

	async bySlug(slug: string) {
		return this.productRepository.findOne({
			where: {
				slug
			},
			relations: {
				category: true
			}
		})
	}

	async findProduct(searchTerm: string) {
		return this.productRepository.find({
			where: [
				{ name: ILike(`%${searchTerm}%`) },
				{ slug: ILike(`%${searchTerm}%`) },
				{ category: ILike(`%${searchTerm}%`) }
			],
			relations: {
				category: true
			}
		})
	}
}
