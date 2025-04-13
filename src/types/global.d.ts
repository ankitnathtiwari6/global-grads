interface Window {
  gtag: (
    command: string,
    targetId: string,
    config?: {
      page_path?: string;
      [key: string]: unknown; // Avoid 'any' by using 'unknown'
    }
  ) => void;
  dataLayer: Array<Record<string, unknown>>; // If dataLayer is an array of objects with unknown structure
}
