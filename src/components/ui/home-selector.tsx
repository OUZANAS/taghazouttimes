import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const homeVersions = [
  { name: 'Home V1 - SaaS', path: '/home-v1' },
  { name: 'Home V2 - Travel', path: '/home-v2' },
  { name: 'Home V3 - Business', path: '/home-v3' },
  { name: 'Home V4 - Events', path: '/home-v4' },
  { name: 'Home V5 - Portfolio', path: '/home-v5' },
];

export const HomeSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getCurrentVersion = () => {
    if (location.pathname === '/') return 'Home';
    const current = homeVersions.find(v => v.path === location.pathname);
    return current ? current.name : 'Home';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium">
          {getCurrentVersion()}
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => navigate('/')}>
          Home (Default)
        </DropdownMenuItem>
        {homeVersions.map((version) => (
          <DropdownMenuItem 
            key={version.path}
            onClick={() => navigate(version.path)}
          >
            {version.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};