/// <reference types="vite/client" />

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

interface Window {
  fbq?: FbqFn;
  _fbq?: FbqFn;
}
