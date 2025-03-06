import { FilterComplexity, FilterRate } from '@/features/filters/model/types';

export const TOTAL_PAGES = 10;

export const DIFFICULTY_ITEMS: FilterComplexity[] = [
  { id: 1, value: [1, 2, 3], label: '1–3' },
  { id: 2, value: [4, 5, 6], label: '4–6' },
  { id: 3, value: [7, 8], label: '7–8' },
  { id: 4, value: [9, 10], label: '9–10' },
];

export const RATING_ITEMS: FilterRate[] = [
  { id: 1, value: 1, label: '1' },
  { id: 2, value: 2, label: '2' },
  { id: 3, value: 3, label: '3' },
  { id: 4, value: 4, label: '4' },
  { id: 5, value: 5, label: '5' },
];
export const MAX_PREWIEW_LENGTH = 1000;
