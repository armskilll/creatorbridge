import React from 'react';
import Link from 'next/link';

type SocialMedia = {
  platform: string;
  url: string;
  icon?: string;
};

type CreatorProfileProps = {
  id: string | number;
  name: string;
  avatar: string;
  category: string;
  bio: string;
  followers: number;
  following?: number;
  socialMedia?: SocialMedia[];
  isFollowing?: boolean;
  onFollow?: () => void;
};

export default function CreatorProfile({
  id,
  name,
  avatar,
  category,
  bio,
  followers,
  following,
  socialMedia = [],
  isFollowing = false,
  onFollow,
}: CreatorProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover image */}
      <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
      
      {/* Profile info */}
      <div className="px-6 py-4 relative">
        <div className="flex flex-col sm:flex-row">
          {/* Avatar */}
          <div className="absolute -top-12 left-6 rounded-full border-4 border-white">
            <img 
              src={avatar} 
              alt={name} 
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
          {/* Creator info */}
          <div className="mt-12 sm:mt-0 sm:ml-28 flex-grow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-gray-600">{category}</p>
              </div>
              
              <button
                onClick={onFollow}
                className={`mt-4 sm:mt-0 px-5 py-2 rounded-full ${
                  isFollowing 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-secondary text-white hover:bg-secondary/90'
                } transition-colors`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            
            <p className="mt-4 text-gray-700">{bio}</p>
            
            <div className="mt-4 flex space-x-6 text-gray-600">
              <span><strong>{followers.toLocaleString()}</strong> followers</span>
              {following !== undefined && (
                <span><strong>{following.toLocaleString()}</strong> following</span>
              )}
            </div>
            
            {/* Social media links */}
            {socialMedia.length > 0 && (
              <div className="mt-4 flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="px-6 py-2 border-t border-gray-200">
        <div className="flex space-x-6">
          <Link 
            href={`/community/creator/${id}`}
            className="py-2 border-b-2 border-secondary font-medium text-secondary"
          >
            Content
          </Link>
          <Link 
            href={`/community/creator/${id}/about`}
            className="py-2 text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
          <Link 
            href={`/community/creator/${id}/community`}
            className="py-2 text-gray-600 hover:text-gray-900"
          >
            Community
          </Link>
        </div>
      </div>
    </div>
  );
}
