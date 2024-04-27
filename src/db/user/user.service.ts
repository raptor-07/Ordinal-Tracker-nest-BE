import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: { id },
        });
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: { email },
        });
    }

    async findOneByTelegramId(telegramId: string): Promise<User> {
        return await this.userRepository.findOne({
            where: { telegramId },
        });
    }

    async update(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}