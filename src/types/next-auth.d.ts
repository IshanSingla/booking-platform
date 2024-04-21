import { Session } from "inspector";
import NextAuth, {
    DefaultSession,
    Account,
    User,
    CallbacksOptions
} from "next-auth";
import { JWT } from "next-auth/jwt";
import { UserSchema, OrganizationSchema } from "./schema";

declare module "next-auth" {
    interface Session {
        user: UserSchema,
        org?: OrganizationSchema,
    }
    interface JWT {
        id: string;
    }
}