import { CategorySchema, UserSchema } from './schema'

export interface AdminOverviewProps {
    category: number;
    organization: number;
    request: number;
    user: number;
    admins: any[];
}

export type AdminUserProps = UserSchema[]
export type AdminCategoryProps = CategorySchema[]