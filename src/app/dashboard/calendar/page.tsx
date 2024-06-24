'use client';
import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="flex-col sm:flex sm:flex-row sm:flex-wrap gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={date => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={date => date > new Date()}
      />
      <Calendar mode="multiple" selected={multipleDates} onSelect={setMultipleDates} className="rounded-md border" />
      <div>
        <h1 className="text-3xl">Information</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map(localDate => localDate.toLocaleDateString()).join(', ')}</p>
      </div>
    </div>
  );
}
