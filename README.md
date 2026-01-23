# CA Monk Blog Application 

A modern, responsive blog application built with React, TypeScript, TanStack Query, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

✅ **Complete Blog Management System**
- View all blogs with pagination and search
- Individual blog detail pages with rich content
- Create new blogs with form validation
- Category-based organization
- Responsive design for all devices

✅ **Modern Tech Stack**
- **React 19** with **TypeScript** for type safety
- **TanStack Query** for server state management
- **Tailwind CSS** for styling and responsive design
- **shadcn/ui** for consistent, accessible UI components
- **Vite** for fast development and optimized builds

✅ **Professional Features**
- Loading states with skeleton loaders
- Error boundaries and proper error handling
- Form validation with user-friendly feedback
- Mobile-responsive design
- Clean, modern UI/UX
- Query invalidation and caching

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishu685/blog_assignment.git
   cd blog_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run server
   ```
   > API runs on http://localhost:3001

4. **Start the Development Server (New Terminal)**
   ```bash
   npm run dev
   ```
   > App runs on http://localhost:5173

## 📱 Usage

### Viewing Blogs
- Browse all blogs in the left panel
- Click any blog card to view full content
- Categories are displayed as badges
- Responsive design adapts to screen size

### Creating Blogs
- Click "New Blog" button
- Fill out the form with required information:
  - Title (required)
  - Categories (add multiple tags)
  - Description (required)
  - Cover Image URL (required)
  - Full content (required)
- Form validation provides immediate feedback
- Successfully created blogs appear immediately in the list

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── BlogList.tsx    # Blog listing component
│   ├── BlogCard.tsx    # Individual blog card
│   ├── BlogDetail.tsx  # Blog detail view
│   ├── CreateBlogForm.tsx # Blog creation form
│   └── ErrorBoundary.tsx # Error handling
├── hooks/              # Custom React hooks
│   └── useBlogs.ts     # TanStack Query hooks
├── lib/                # Utilities and API
│   ├── api/           # API service layer
│   └── utils.ts       # Helper functions
├── types/             # TypeScript type definitions
│   └── blog.ts        # Blog-related types
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

- **Color Scheme**: Clean, professional palette
- **Typography**: System fonts with proper hierarchy
- **Components**: shadcn/ui for consistency
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant components

## 🔧 Technical Highlights

### State Management
- **TanStack Query** for server state
- Automatic caching and background updates
- Query invalidation after mutations
- Loading and error states handled globally

### Type Safety
- **Full TypeScript coverage**
- Strict type checking enabled
- Custom types for all data models
- Type-safe API calls

### Performance
- **Vite** for fast development
- **React 19** with modern features
- Optimized bundle size
- Efficient re-rendering patterns

## 📦 Build & Deployment

### Development
```bash
npm run dev        # Start development server
npm run server     # Start JSON server
```

### Production
```bash
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🚀 Assignment Completion

This project successfully implements all required features:

✅ **Core Requirements**
- Get all blogs using TanStack Query
- Individual blog detail views
- Create new blogs with form validation
- Query invalidation after mutations

✅ **Technical Requirements**
- TypeScript throughout the application
- TanStack Query for data fetching
- Tailwind CSS for styling
- shadcn/ui components

✅ **Quality Standards**
- Clean, organized code structure
- Error handling and loading states
- Responsive design
- Professional UI/UX

## 👨‍💻 Developer

Built with ❤️ for the CA Monk technical assessment.

---





### API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Get all blogs |
| GET | `/blogs/:id` | Get a specific blog by ID |
| POST | `/blogs` | Create a new blog |



## Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```

# 
