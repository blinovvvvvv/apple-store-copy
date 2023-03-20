import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeormConfig = async (
	configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
	type: 'postgres',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true,
	autoLoadEntities: true,
	url: configService.get('DATABASE_URL')
})
