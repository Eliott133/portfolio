import React from 'react';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { Icon } from './common/Icon';

function ViewAllProjectsCard({ className = '' }){
  return (
    <Card className={`relative overflow-hidden group flex flex-col justify-center items-center p-8 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">Voir tous les projets</h2>
        <p className="text-gray-600">Découvrez l'ensemble de mes réalisations</p>
      </div>
      
      <Button to="/projects" variant="primary" className="animate-bounce">
        Explorer
        <Icon name="FaArrowRight" size={16} />
      </Button>
    </Card>
  );
};

export default ViewAllProjectsCard