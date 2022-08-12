/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      REACT_APP_API_URL: string;
    }
  }
}
