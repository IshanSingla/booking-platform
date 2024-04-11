import { getOptions } from "@/pages/api/auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";
import { User, getServerSession } from "next-auth";

export type Middlware = (next: (req: CustomRquest, res: NextApiResponse) => Promise<void>) => (req: CustomRquest, res: NextApiResponse) => Promise<void>;
export type CustomRquest = NextApiRequest & {
    user?: User;
};
export const verifyAuth: Middlware = (next) => async (req, res) => {
    const options = getOptions(req, res);
    const session = await getServerSession(req, res, options);
    if (session) {
        req.user = session.user;
        return await next(req, res);
    }
    res.status(401).json({ message: "Unauthorized" });
};

export const verifyAuthAdmin: Middlware = (next) => async (req, res) => {
    const options = getOptions(req, res);
    const session = await getServerSession(req, res, options);
    if (session && (session.user.role === "ADMIN" || session.user.role === "SUPERADMIN")) {
        req.user = session.user;
        return await next(req, res);
    }
    res.status(401).json({ message: "Unauthorized" });
};

export const verifyAuthOrg: Middlware = (next) => async (req, res) => {
    const options = getOptions(req, res);
    const session = await getServerSession(req, res, options);
    if (session && session.user.role === "ORGANIZATION") {
        req.user = session.user;
        return await next(req, res);
    }
    res.status(401).json({ message: "Unauthorized" });
};

export const verifyAuthStudent: Middlware = (next) => async (req, res) => {
    const options = getOptions(req, res);
    const session = await getServerSession(req, res, options);
    if (session && session.user.role === "STUDENT") {
        req.user = session.user;
        return await next(req, res);
    }
    res.status(401).json({ message: "Unauthorized" });
};