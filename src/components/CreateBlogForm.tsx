import React, { useState } from 'react';
import { useCreateBlog } from '@/hooks/useBlogs';
import { CreateBlogData } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Loader2 } from 'lucide-react';

interface CreateBlogFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState<CreateBlogData>({
    title: '',
    category: [],
    description: '',
    content: '',
    coverImage: '',
  });
  const [categoryInput, setCategoryInput] = useState('');
  const [errors, setErrors] = useState<Partial<CreateBlogData>>({});

  const { mutate: createBlog, isPending } = useCreateBlog();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof CreateBlogData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAddCategory = () => {
    const trimmedCategory = categoryInput.trim().toUpperCase();
    if (trimmedCategory && !formData.category.includes(trimmedCategory)) {
      setFormData(prev => ({
        ...prev,
        category: [...prev.category, trimmedCategory],
      }));
      setCategoryInput('');
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      category: prev.category.filter(cat => cat !== categoryToRemove),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCategory();
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CreateBlogData> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.coverImage.trim()) newErrors.coverImage = 'Cover image URL is required';
    if (formData.category.length === 0) newErrors.category = ['At least one category is required'];

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    createBlog(formData, {
      onSuccess: () => {
        onSuccess();
      },
      onError: (error) => {
        console.error('Failed to create blog:', error);
      },
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Blog</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && <p className="text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <Label htmlFor="category">Categories *</Label>
            <div className="flex space-x-2">
              <Input
                id="category"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add category (e.g., TECH, FINANCE)"
                className="flex-1"
              />
              <Button
                type="button"
                onClick={handleAddCategory}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.category.map((cat) => (
                <Badge key={cat} variant="secondary" className="flex items-center space-x-1">
                  <span>{cat}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(cat)}
                    className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            {errors.category && <p className="text-sm text-red-600">At least one category is required</p>}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of the blog"
              rows={3}
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL *</Label>
            <Input
              id="coverImage"
              name="coverImage"
              type="url"
              value={formData.coverImage}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className={errors.coverImage ? 'border-red-500' : ''}
            />
            {errors.coverImage && <p className="text-sm text-red-600">{errors.coverImage}</p>}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Write your blog content here..."
              rows={8}
              className={errors.content ? 'border-red-500' : ''}
            />
            {errors.content && <p className="text-sm text-red-600">{errors.content}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isPending ? 'Creating...' : 'Create Blog'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};