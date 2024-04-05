

export interface AdminOverviewProps {
    category: number;
    organization: number;
    request: number;
    user: number;
    admins: any;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
}