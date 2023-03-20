import { Field, InputType } from '@nestjs/graphql'
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator'
import {
	EnumColor,
	EnumRamSize,
	EnumStorageSize
} from '../entity/product.entity'

@InputType()
export class CreateProductDto {
	@IsString()
	@Field()
	name: string

	@IsNumber()
	@Field()
	price: number

	@IsString()
	@Field()
	slug: string

	@IsArray()
	@Field(() => [String])
	images: string[]

	@IsString()
	@Field(() => String)
	color: EnumColor

	@IsArray()
	@Field(() => [String])
	allColors: EnumColor[]

	@IsArray()
	@IsOptional()
	@Field(() => [String], {
		nullable: true
	})
	ramSize?: EnumRamSize[]

	@IsArray()
	@IsOptional()
	@Field(() => [String], {
		nullable: true
	})
	storageSize?: EnumStorageSize[]

	@IsString()
	@Field()
	category: string
}
