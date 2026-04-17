export interface ApiUser {
  id: string;
  username: string;
}

export interface ApiSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: ApiUser;
}

export interface SpecializationsResponse {
  total: number;
  page: number;
  limit: number;
  data: ApiSpecialization[];
}

export type GetSpecializationsParams = {
  page?: number;
  limit?: number;
  title?: string;
  authorId?: string;
};
