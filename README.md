# CA Monk Blog Application ✅

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

**Tech Stack**: React • TypeScript • TanStack Query • Tailwind CSS • shadcn/ui • Vite
  - 📚 [Documentation](https://ui.shadcn.com/)

## UI Reference

Here's a reference design for the blog application layout:

![Blog Reference](image.png)

**Left Panel:** Blog list view showing blog cards with category, title, and description  
**Right Panel:** Blog detail view displaying cover image, full content

UI IMAGE - ![UI-refernece](ui.jpeg)

> **Note:** This is just a reference design. Your implementation does not have to look exactly like this. 

For the blog content, use plain text — no need to use HTML-formatted text.

### Tasks to Complete

#### 1. **Get All Blogs**
- Create a component to display all blogs using `GET /blogs`
- Use TanStack Query for data fetching
- Handle loading and error states

#### 2. **Get Blog by ID**
- Implement single blog view using `GET /blogs/:id`
- Use TanStack Query for data fetching

#### 3. **Create a New Blog**
- Build a form to create a new blog using `POST /blogs`
- Invalidate queries after successful creation

> Organize your components in a suitable file structure within the `src/` directory.

### API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Get all blogs |
| GET | `/blogs/:id` | Get a specific blog by ID |
| POST | `/blogs` | Create a new blog |

### Evaluation Criteria

Your submission will be evaluated on:
- ✅ Correct implementation of TanStack Query hooks
- ✅ Proper use of Tailwind CSS for styling
- ✅ Integration of shadcn/ui components
- ✅ Code organization and structure
- ✅ Error handling and loading states
- ✅ Responsive design []
- ✅ User experience and UI polish



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

description: A short summary of the blog  
content: The full content of the blog

## Tips

- Set up TanStack Query's `QueryClientProvider` in your app root
- Configure Tailwind CSS properly in your config files
- Use shadcn components like `Card`, `Button`, `Input`, etc.
- Handle loading states with skeletons
- Implement proper error boundaries
- Consider using React Router for navigation (optional)

## Submission

Once you've completed the assignment:
1. Ensure all tasks are working correctly
2. Commit your changes with clear commit messages
3. Push your changes to your **forked** repository
4. Share the link to your forked repository for review in the Google Form provided

## FAQ

**Do I need to deploy the code?**  
No. Simply work on your forked repository, commit and push your changes, and share the repository link via the Google Form.

**Is it mandatory to use TypeScript and TanStack Query?**  
Yes, using both TypeScript and TanStack Query is compulsory for this assignment.

**Is using JSON Server mandatory, or can I create my own server?**  
Using JSON Server is mandatory. Please use the provided JSON Server setup rather than creating your own backend.

**What should I use for styling?**  
Use **Tailwind CSS** and **shadcn/ui** for styling. You are expected to install, configure, and use both Tailwind CSS and shadcn/ui components in your implementation.

**What are the main things you will evaluate?**  
We will mainly look at:
- Correct use of the required technologies (TypeScript, TanStack Query, Tailwind CSS, shadcn/ui)  
- Code quality and structure  
- UI/UX, including responsiveness and overall experience  

**What happens after I submit the assignment?**  
If you are shortlisted, you will receive an email about the next round. The next round will be a task-based session focused on your coding skills and React knowledge.

**Will my solution be used commercially?**  
No. This assignment is only for the hiring process and will not be used commercially.

**Have more questions?**  
If you have any additional doubts, feel free to reach out at: `developer@camonk.com`.

Good luck! 🚀
