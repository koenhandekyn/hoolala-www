
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 last:mb-0">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              {isOpen ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
            </div>
            <h4 className="text-xl font-bold text-primary tracking-tight flex-1">
              {question}
            </h4>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pl-12">
          <div className="text-muted-foreground bg-soft-gray/50 p-4 rounded-lg leading-relaxed">
            {answer}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FaqItem;
