export interface RegisterFormModel {
    username: string,
    password: string,
    confirmPassword: string;
    email: string;
    userRole: { 
        title: "ADMIN" | "USER" | "";
    }
}