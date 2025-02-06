import React from 'react';
import { Card } from './common/Card';
import { Button } from './common/Button';

export const SkillCard = ({
  icon,
  title,
  description,
  link,
  className = ''
}) => {
  return (
    <Card className={`p-6 transform hover:scale-105 transition-all ${className}`}>
      {icon && (
        <div className="flex items-center justify-center mb-4">
          <img
            src={`/src/assets/logo/${icon}.svg`}
            alt={title}
            width="100"
            height="100"
          />
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      
      {description && (
        <p className="text-gray-300 text-center text-sm mb-6">
          {description}
        </p>
      )}

      {link && (
        <div className="text-center">
          <Button href={link} variant="primary">
            En savoir plus
          </Button>
        </div>
      )}
    </Card>
  );
};