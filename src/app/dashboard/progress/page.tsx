'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function Page() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          'bg-red-500': progress < 50,
          'bg-yellow-500': progress >= 50 && progress < 50,
          'bg-green-500': progress >= 80,
        })}
        className="w-[60%]"
      />
    </div>
  );
}
