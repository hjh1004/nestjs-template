import { User } from './entities/user.entity';

export const UserProviders = [{ provide: 'UserRepository', useValue: User }];
