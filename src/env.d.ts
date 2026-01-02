/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_DATASET: string;
  readonly SANITY_API_VERSION: string;
  readonly GTM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
