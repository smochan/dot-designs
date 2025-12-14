import React from 'react';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    { id: 1, title: "Wedding Couple", category: "Events", imageUrl: "https://picsum.photos/400/500?random=10" },
    { id: 2, title: "Pet Portrait", category: "Pets", imageUrl: "https://picsum.photos/400/500?random=11" },
    { id: 3, title: "Superhero Kid", category: "Kids", imageUrl: "https://picsum.photos/400/500?random=12" },
    { id: 4, title: "Anniversary", category: "Events", imageUrl: "https://picsum.photos/400/500?random=13" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Our Masterpieces</h2>
            <p className="text-gray-600 dark:text-gray-400">Browse through our recent creations.</p>
        </div>
        <button className="text-gold-500 font-semibold hover:text-amber-600 dark:hover:text-white transition-colors">
            View Full Gallery &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 cursor-pointer shadow-lg dark:shadow-none">
            <div className="aspect-[4/5] w-full">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};