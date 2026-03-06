import React from 'react';

type HeadingSize = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
type BodySize = 'large' | 'medium' | 'small';
type BodyWeight = 'regular' | 'medium' | 'bold';
type MetricSize = 'large' | 'medium' | 'small';

interface HeadingProps {
  size?: HeadingSize;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

interface BodyProps {
  size?: BodySize;
  weight?: BodyWeight;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

interface MetricProps {
  size?: MetricSize;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ 
  size = 'medium', 
  as: Component = 'h2', 
  children, 
  className = '' 
}) => {
  return (
    <Component className={`heading-${size} ${className}`}>
      {children}
    </Component>
  );
};

export const Body: React.FC<BodyProps> = ({ 
  size = 'medium', 
  weight = 'regular',
  as: Component = 'p', 
  children, 
  className = '' 
}) => {
  const weightClass = weight === 'regular' ? '' : `-${weight}`;
  return (
    <Component className={`body-${size}${weightClass} ${className}`}>
      {children}
    </Component>
  );
};

export const Metric: React.FC<MetricProps> = ({ 
  size = 'medium', 
  as: Component = 'p', 
  children, 
  className = '' 
}) => {
  return (
    <Component className={`metric-${size} ${className}`}>
      {children}
    </Component>
  );
};

export const Code: React.FC<CodeProps> = ({ 
  children, 
  className = '',
  inline = false
}) => {
  const Component = inline ? 'code' : 'pre';
  return (
    <Component className={`code ${className}`}>
      {inline ? children : <code>{children}</code>}
    </Component>
  );
};
