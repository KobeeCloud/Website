'use client';

import { useEffect, useState } from 'react';
import { Activity, Clock, Zap } from 'lucide-react';
import { fetchStatus, type StatusData } from '@/lib/status';
import { cn } from '@/lib/utils';

export function StatusWidget() {
  const [status, setStatus] = useState<StatusData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const data = await fetchStatus();
        setStatus(data);
      } catch (error) {
        console.error('Failed to fetch status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStatus();
    
    const interval = setInterval(loadStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading || !status) {
    return (
      <div className="bg-secondary/50 border border-border rounded-lg p-4 animate-pulse">
        <div className="h-4 bg-border rounded w-24 mb-2" />
        <div className="h-6 bg-border rounded w-32" />
      </div>
    );
  }

  const statusColors = {
    operational: 'text-success',
    degraded: 'text-warning',
    down: 'text-danger',
  };

  const statusLabels = {
    operational: 'Operational',
    degraded: 'Degraded',
    down: 'Down',
  };

  return (
    <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">System Status</h3>
        <div className="flex items-center space-x-2">
          <div
            className={cn(
              'w-2 h-2 rounded-full animate-pulse',
              status.status === 'operational' && 'bg-success',
              status.status === 'degraded' && 'bg-warning',
              status.status === 'down' && 'bg-danger'
            )}
          />
          <span className={cn('text-sm font-medium', statusColors[status.status])}>
            {statusLabels[status.status]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Activity size={20} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{status.uptime}%</div>
          <div className="text-xs text-muted">Uptime</div>
        </div>

        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap size={20} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{status.responseMs}ms</div>
          <div className="text-xs text-muted">Response</div>
        </div>

        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock size={20} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {new Date(status.lastDeploy).toLocaleDateString('pl-PL', { day: '2-digit', month: 'short' })}
          </div>
          <div className="text-xs text-muted">Last Deploy</div>
        </div>
      </div>
    </div>
  );
}
