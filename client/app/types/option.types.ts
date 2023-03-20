export type TypeRamSize = '8 ГБ' | '16 ГБ' | '32 ГБ' | '64 ГБ' | '96 ГБ'
export type TypeStorageSize =
	| '128 ГБ'
	| '256 ГБ'
	| '512 ГБ'
	| '1 ТБ'
	| '2 ТБ'
	| '4 ТБ'
	| '8 ТБ'

export type TypeColor =
	| 'Space Gray'
	| 'Silver'
	| 'White'
	| 'Space Black'
	| 'Deep Purple'

export type TypeCategory = 'iphone' | 'macbook' | 'airpods'

export interface IOptionData {
	ramSize?: TypeRamSize
	storageSize?: TypeStorageSize
}
