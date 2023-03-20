import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { CategoryEntity } from '../../category/entity/category.entity'
import { Base } from '../../common/utils/base.entity'

export enum EnumRamSize {
	VAL_8 = '8 ГБ',
	VAL_16 = '16 ГБ',
	VAL_32 = '32 ГБ',
	VAL_64 = '64 ГБ',
	VAL_96 = '96 ГБ'
}

export enum EnumStorageSize {
	VAL_128 = '128 ГБ',
	VAL_256 = '256 ГБ',
	VAL_512 = '512 ГБ',
	VAL_1TB = '1 ТБ',
	VAL_2TB = '2 ТБ',
	VAL_4TB = '4 ТБ',
	VAL_8TB = '8 ТБ'
}

export enum EnumColor {
	GRAY = 'Space Gray',
	SILVER = 'Silver',
	WHITE = 'White',
	BLACK = 'Space Black',
	PURPLE = 'Deep purple'
}

@ObjectType()
@Entity('Product')
export class ProductEntity extends Base {
	@Field({ defaultValue: '' })
	@Column({ default: '', type: 'text' })
	name: string

	@Field({ defaultValue: 0 })
	@Column({ default: 0 })
	price: number

	@Field({ defaultValue: '' })
	@Column({ default: '', type: 'text', unique: true })
	slug: string

	@Field(() => [String])
	@Column({ type: 'simple-array', nullable: true })
	images: string[]

	@Field(() => [String], {
		nullable: true
	})
	@Column({
		name: 'ram_size',
		type: 'simple-array',
		nullable: true,
		enum: EnumRamSize
	})
	ramSize?: EnumRamSize[]

	@Field(() => [String], {
		nullable: true
	})
	@Column({
		name: 'storage_size',
		enum: EnumStorageSize,
		nullable: true,
		type: 'simple-array'
	})
	storageSize?: EnumStorageSize[]

	@Field(() => String)
	@Column({ enum: EnumColor })
	color: EnumColor

	@Column({ enum: EnumColor, type: 'simple-array', nullable: true })
	@Field(() => [String], {
		nullable: true
	})
	allColors: EnumColor[]

	@Field()
	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'category_slug', referencedColumnName: 'slug' })
	category: CategoryEntity
}
