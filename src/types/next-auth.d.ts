import { Session } from "inspector";
import NextAuth, {
    DefaultSession,
    Account,
    User,
    CallbacksOptions
} from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string| null;
            phoneNumber: string;

            role: null | 'admin' | 'student' | 'organization';
            loginIp: string;
            loginDevice: string;
            createdAt: Date;
            updatedAt: Date;
        },
    }
    interface JWT {
        id: string;
    }
}