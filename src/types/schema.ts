export type UserSchema = {
    id: string;
    name?: string | null;
    phoneNumber: string;
    role?: 'SUPERADMIN' | 'ADMIN' | 'STUDENT' | 'ORGANIZATION'
    email?: string | null;
    disabled: boolean;
    loginIp: string;
    loginDevice: string;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
};

export type PhoneOtpSchema = {
    id: string;
    phoneNumber: string;
    otp: string;
    expTime: Date;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
};

export type CategorySchema = {
    id: string | null;
    name: string | null;
    description: string | null;
    image: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
};

export type OrganizationSchema = {
    id: string | null;
    name: string | null;
    displayName: string | null;
    address: string | null;
    pincode: string | null;
    description: string | null;
    logo: string | null;
    isVerified: boolean | null;
    phoneNumber: string | null;
    email: string | null;
    website: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
};
