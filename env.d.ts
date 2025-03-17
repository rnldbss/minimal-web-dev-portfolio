/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  // add any additional env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
