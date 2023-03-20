import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'
import { CategoryEntity } from './entity/category.entity'

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
