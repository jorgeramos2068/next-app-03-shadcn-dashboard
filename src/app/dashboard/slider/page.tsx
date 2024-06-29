'use client';

import * as React from 'react';

import { Slider } from '@/components/ui/slider';

export default function Page() {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [rangeValue, setRangeValue] = React.useState([10, 20]);

  const onValueChange = (value: number[]): void => {
    setSliderValue(value[0]);
  };

  const onRangeChange = (value: number[]): void => {
    setRangeValue(value);
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider value: {sliderValue}</span>
      <Slider defaultValue={[sliderValue]} max={100} onValueChange={onValueChange} step={1} />

      <span>Range value: {rangeValue.join(',')}</span>
      <Slider defaultValue={rangeValue} max={100} onValueChange={onRangeChange} step={1} />
    </div>
  );
}
