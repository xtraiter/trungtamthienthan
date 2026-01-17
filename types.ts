export interface StaffMember {
  name: string;
  role: string;
  qualifications?: string[];
  imageUrl: string;
}

export interface ManagerProfile extends StaffMember {
  fullBio: string[];
  achievements?: string[];
  links?: string[];
}

export interface Program {
  title: string;
  description: string;
  details: string[];
}