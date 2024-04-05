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
            name: string;
            phoneNumber: string;

            role: null | 'admin' | 'user' | 'organization';
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