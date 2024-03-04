import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserController {
  private UserRepository: UserRepository;
  constructor() {
    this.UserRepository = new UserRepositoryPrisma();
  }

  async create({ email, name, password }: UserCreate): Promise<User> {}
}

export { UserController };
