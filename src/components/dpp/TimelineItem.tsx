
import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, icon, color }) => (
  <div className="flex mb-8 relative">
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0 z-10`}>
      {icon}
    </div>
    <div className="ml-6">
      <div className="font-medium text-sm text-muted-foreground">{date}</div>
      <div className="font-semibold mb-2">{title}</div>
    </div>
    <div className="absolute left-5 top-10 w-[2px] h-12 bg-border -z-0"></div>
  </div>
);

export default TimelineItem;
