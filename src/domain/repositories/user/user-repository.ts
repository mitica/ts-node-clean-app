import { User, UserWritableKeys, UserData } from "../../entities/user/user";
import { Repository } from "../repository";
import { UserCreateData } from "./user-create-data";
import { EntityId } from "../../entities/base";

export interface UserRepository<
  TData extends UserData = UserData,
  TEntity extends User<TData> = User<TData>,
  TCreateData extends UserCreateData = UserCreateData,
  KSet extends UserWritableKeys = UserWritableKeys
> extends Repository<TData, TEntity, TCreateData, KSet> {
  getByEmail(email: string): Promise<TEntity | null>;
  getPasswordByEmail(
    email: string
  ): Promise<{ id: EntityId; password: string } | null>;
}
