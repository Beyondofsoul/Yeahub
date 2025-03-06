export interface ISkills {
  id: number;
  imageSrc?: string;
  title: string;
  total: number;
}
export interface ISpecializations {
  id: number;
  title: string;
  total: number;
}

export interface FilterComplexity {
  id: number;
  value: number[];
  label: string;
}
export interface FilterRate {
  id: number;
  value: number;
  label: string;
}

export type SkillsSpecializations = ISkills & ISpecializations;
export type FilterRange = FilterRate | FilterComplexity;
