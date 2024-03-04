import { User, UserCreate, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export { UserRepositoryPrisma };
