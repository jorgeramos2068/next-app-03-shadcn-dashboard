'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export default function Page() {
  const { toast } = useToast();

  const handleClick = (): void => {
    console.log('Undo');
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: `${new Date()}`,
            action: (
              <ToastAction altText="Goto schedule to undo" onClick={handleClick}>
                Undo
              </ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </div>
  );
}
