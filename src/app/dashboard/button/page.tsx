'use client';
import { ChevronRightIcon, Loader2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
  const handleClick = () => {
    console.log('Hello World');
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={handleClick}>Click me</Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
