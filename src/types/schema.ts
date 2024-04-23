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

export interface OrganizationSchema {
    id: string;
    user?: UserSchema | null;
    userId?: string | null;
    address?: string | null;
    pincode?: string | null;
    isVerified: boolean;
    phoneNumber?: string | null;
    email?: string | null;
    website?: string | null;
    boardName: string;
    affiliationNumber: string;
    orgName: string;
    passPercentage: number;
    teacherStudentRatio: number;
    extracurricular: ExtracurricularSchema;
    infrastructure: InfrastructureSchema;
    timings: TimingSchema;
    affordability: AffordabilitySchema;
    transportFacility: boolean;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    requests: RequestSchema[];
    category: CategorySchema | null;
}

export interface ExtracurricularSchema {
    id: string;
    sports: boolean;
    arts: boolean;
    music: boolean;
    debate: boolean;
    community: boolean;
    createdAt: Date;
    updatedAt: Date;
    organization: OrganizationSchema[];
}

export interface InfrastructureSchema {
    id: string;
    smartClass: boolean;
    library: boolean;
    laboratories: boolean;
    playground: boolean;
    computerLab: boolean;
    createdAt: Date;
    updatedAt: Date;
    organization: OrganizationSchema[];
}

export interface TimingSchema {
    id: string;
    startTime: string;
    endTime: string;
    createdAt: Date;
    updatedAt: Date;
    organization: OrganizationSchema[];
}

export interface AffordabilitySchema {
    id: string;
    admissionFee: string;
    monthlyFee: string;
    scholarships: boolean;
    createdAt: Date;
    updatedAt: Date;
    organization: OrganizationSchema[];
}

export interface RequestSchema {
    id: string;
    organization: OrganizationSchema;
    user: UserSchema;
    createdAt: Date;
    updatedAt: Date;
}