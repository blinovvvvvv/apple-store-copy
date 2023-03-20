import { Field, ObjectType } from '@nestjs/graphql'
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

@ObjectType()
export abstract class Base {
	@PrimaryGeneratedColumn()
	@Field()
	id: number

	@CreateDateColumn({ name: 'created_at' })
	@Field()
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	@Field()
	updatedAt: Date
}
