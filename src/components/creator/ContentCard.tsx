import React from 'react';
import Link from 'next/link';

type ContentStatus = 'published' | 'draft' | 'scheduled';

type ContentCardProps = {
  id: string | number;
  title: string;
  excerpt: string;
  date: string; 
  status: ContentStatus;
  views?: number;
  likes?: number;
  comments?: number;
  thumbnailUrl?: string;
};

export default function ContentCard({
  id,
  title,
  excerpt,
  date,
  status,
  views,
  likes,
  comments,
  thumbnailUrl,
}: ContentCardProps) {
  const statusColors = {
    published: 'bg-green-100 text-green-800',
    draft: 'bg-gray-100 text-gray-800',
    scheduled: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {thumbnailUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-sm text-gray-500">
            {views !== undefined && (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views}
              </span>
            )}
            
            {likes !== undefined && (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {likes}
              </span>
            )}
            
            {comments !== undefined && (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {comments}
              </span>
            )}
          </div>
          
          <Link href={`/creator/content/${id}`} className="text-primary hover:underline">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
