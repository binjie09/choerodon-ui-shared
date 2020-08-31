declare module 'lodash/noop' {
  export default function(...args: any[]): any;
}

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}
