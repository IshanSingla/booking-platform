import { CategorySchema, OrganizationSchema, UserSchema } from './schema'

export interface AdminOverviewProps {
  category: number;
  organization: number;
  request: number;
  user: number;
  admins: any[];
}

export interface OrganizationFormData {
  orgName: string;
  boardName: string;
  affiliationNumber: string;
  address: string;
  pincode: string;
  phoneNumber: string;
  email: string;
  passPercentage: string; // May need conversion to number later if used for calculations
  teacherStudentRatio: string; // May need conversion to number later if used for calculations
  transportFacility: boolean;

  sports: boolean;
  arts: boolean;
  music: boolean;
  debate: boolean;
  community: boolean;

  smartClass: boolean;
  library: boolean;
  laboratories: boolean;
  playground: boolean;
  computerLab: boolean;

  startTime: string;
  endTime: string;
  admissionFee: string; // May need conversion to number later if used for calculations
  monthlyFee: string; // Optional field
}

export type AdminUserProps = UserSchema[]
export type AdminOrganizationProps = OrganizationSchema[]
export type AdminCategoryProps = CategorySchema[]