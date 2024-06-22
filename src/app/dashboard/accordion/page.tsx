import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Item {
  id: string;
  question: string;
  answer: string;
}

const items: Item[] = [
  {
    id: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    question: 'Is it styled?',
    answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: 'item-1',
    question: 'Is it animated?',
    answer: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function Page() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {items.map(({ id, question, answer }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
