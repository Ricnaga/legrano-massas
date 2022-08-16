export type ResultHook<T extends (...args: Array<unknown>) => unknown> = Record<
  'current',
  ReturnType<T>
>;
