import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      user.name = createUserDto.name;
      user.email = createUserDto.email.trim().toLowerCase();
      const userData = await user.save();
      return new UserDto(userData);
    } catch (err) {
      if (err?.original?.code === 'ER_DUP_ENTRY') {
        throw new HttpException(
          `User with email '${err.errors[0].value}' already exists`,
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users.map((user) => new UserDto(user));
  }

  async findOne(id: number) {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new HttpException('User with given id not found', HttpStatus.NOT_FOUND);
    }
    return new UserDto(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findByPk<User>(id);
    if (!user) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }
    user.name = updateUserDto.name;
    const data = await user.save();
    return new UserDto(data);
  }

  async remove(id: number) {
    const user = await this.userRepository.findByPk<User>(id);
    await user.destroy();
    return new UserDto(user);
  }
}
