import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}

export interface AIResponse {
  suggestion: string;
}