/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TEXT_TO_SPEECH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}