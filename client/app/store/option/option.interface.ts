import { TypeRamSize, TypeStorageSize } from '@/types/option.types'

export interface IOptionInitialState {
	ramSize?: TypeRamSize
	storageSize?: TypeStorageSize
	buttons: [TypeRamSize[] | undefined, TypeStorageSize[] | undefined]
	selectedButtons: IOptionButton[]
}

export type TypeOption = 'ramSize' | 'storageSize'

export interface IChangeOptionPayload {
	option: TypeOption
	value: TypeRamSize | TypeStorageSize
	index: number
}

export interface IOptionButton {
	value: TypeRamSize | TypeStorageSize | undefined
	index: number
}
