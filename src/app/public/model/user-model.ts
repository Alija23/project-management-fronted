export interface UserModel {
    username: string,
    email: string;
    role: Role;
    rid: Number;
}

export interface Role {
    title: string;
}