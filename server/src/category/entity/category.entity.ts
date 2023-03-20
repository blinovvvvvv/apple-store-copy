import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from '../../common/utils/base.entity'
import { ProductEntity } from '../../product/entity/product.entity'

@Entity('Category')
@ObjectType()
export class CategoryEntity extends Base {
	@Field()
	@Column({ default: '' })
	name: string

	@Field()
	@Column({ unique: true })
	slug: string

	@OneToMany(() => ProductEntity, product => product.category)
	@Field(() => [ProductEntity], {
		nullable: true
	})
	products?: ProductEntity[]
}
