import React from 'react';

interface HtmlContentProps {
  children: React.ReactNode;
  className?: string;
}

export const HtmlContent: React.FC<HtmlContentProps> = ({ children, className }) => {
  return <span className={className} dangerouslySetInnerHTML={{ __html: String(children) }} />;
};
