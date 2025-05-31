import { AppConfig } from '@/types/app-config';

export async function loadAppConfig(): Promise<AppConfig> {
  const response = await fetch('/data/app-config.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch app-config.json: ${response.statusText}`);
  }
  const config = await response.json();
  return config;
}
