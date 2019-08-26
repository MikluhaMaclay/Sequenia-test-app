import { SortItem } from './types/sort';

export const sortBy = <T>(arr: T[], field: [string, string] | string, order: SortItem): T[] => {
  if (Array.isArray(field)) {
    // * If field is tuple, sort by first field then by second
    if (field.length > 2) {
      console.warn('SortBy field parameter accepts only string or tuple');
    }

    return arr.slice().sort((_a: any, _b: any) => {
      const [k, v] = field;
      const a1 = _a[k];
      const a2 = _a[v]
      const b1 = _b[k];
      const b2 = _b[v];

      if (isNaN(a1) || !a1) return 1;
      if (isNaN(b1) || !b1) return -1;
      if (order === 'ASC') {
        if (a1 > b1) return 1;
        if (b1 > a1) return -1;

        if (isNaN(a2) || !a2) return 1;
        if (isNaN(b2) || !b2) return -1;

        if (a2 > b2) return -1;
        if (b2 > a2) return 1;
        return 0;
      } else {
        if (a1 > b1) return -1;
        if (b1 > a1) return 1;

        if (isNaN(a2) || !a2) return 1;
        if (isNaN(b2) || !b2) return -1;

        if (a2 > b2) return -1;
        if (b2 > a2) return 1;

        return 0;
      }
    });
  } else {
    return arr.slice().sort((_a: any, _b: any) => {
      const a = _a[field];
      const b = _b[field];
      if (isNaN(a) || !a) return 1;
      if (isNaN(b) || !b) return -1;
      if (order === 'ASC') {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      } else {
        if (a > b) return -1;
        if (b > a) return 1;
        return 0;
      }
    }) as any;
  }
}