import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const databaseConfig = configService.get('database');
      const sequelize = new Sequelize(
        databaseConfig.storage,
        databaseConfig.user,
        databaseConfig.password,
        databaseConfig,
      );

      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
