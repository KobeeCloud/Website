export interface StatusData {
  uptime: number;
  lastDeploy: string;
  responseMs: number;
  status: 'operational' | 'degraded' | 'down';
}

export async function fetchStatus(): Promise<StatusData> {
  
  
  const uptime = 99.98;
  const responseMs = Math.round(Math.random() * 50 + 30);

  return {
    uptime,
    lastDeploy: process.env.NEXT_PUBLIC_LAST_DEPLOY_AT || new Date().toISOString(),
    responseMs,
    status: uptime >= 99.9 ? 'operational' : uptime >= 99 ? 'degraded' : 'down'
  };
}
