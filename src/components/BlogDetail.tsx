import { Blog } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface BlogDetailProps {
  blog: Blog | null;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  if (!blog) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500">Select a blog to view details</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src={blog.coverImage} 
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg'; // Fallback image
          }}
        />
      </div>

      {/* Blog Content */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-3xl font-bold mb-2">
            {blog.title}
          </CardTitle>
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.date)}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Description */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-lg font-medium text-gray-800">{blog.description}</p>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {blog.content}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};