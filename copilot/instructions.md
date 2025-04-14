# Modern Forum Project Instructions

## Project Overview

This project is a text-based forum with a minimalist, modern design. The forum features categories, threads, user profiles, and an upvoting system. The design emphasizes clean typography, white space, and a black-on-white color scheme.

## Tech Stack

- Next.js
- TypeScript
- shadcn UI components
- framer motion

## Design Principles

- **Minimalism**: Remove all unnecessary elements
- **Modern, Sleek**: UI should be modern, sleek and beatiful
- **Typography-focused**: Clean, readable text is the priority
- **White space**: Generous spacing between elements
- **Subtle interactions**: Hover states and micro-interactions should be noticeable but not distracting

## Pages & Components

### 1. Navigation & Layout

The main layout should include:

- Header with logo text "Forum" or a minimal icon
- Navigation links: Home, Categories, Recent, Search
- User menu in top right (avatar + dropdown)
- Clean footer with minimal links

### 2. Homepage

The homepage should display:

- Featured/pinned threads at the top (optional)
- Category grid with:
  - Category name
  - Brief description
  - Thread count
  - Last activity timestamp
- Recent activity sidebar (optional for desktop)

### 3. Category Page

The category page displays threads within a specific category:

- Category header with name and description
- "New Thread" button
- Thread list with:
  - Thread title (linked to thread)
  - Author info (name + tiny avatar)
  - Upvote count
  - Reply count
  - Last activity timestamp
- Sorting options (dropdown)
- Pagination

### 4. Thread Page

The thread page displays a conversation:

- Thread title
- Original post with:
  - Author info
  - Content
  - Timestamp
  - Upvote/downvote controls
- Replies with:
  - Nested structure (indentation)
  - Author info
  - Content
  - Timestamp
  - Upvote/downvote controls
- Reply form at bottom

### 5. User Profile

The user profile page should include:

- User avatar (larger than navigation)
- Username
- Join date
- Activity statistics
- Tabs for:
  - Threads started
  - Replies
  - Upvoted content
- Settings button (if own profile)

### 6. Create/Edit Thread

The creation page should include:

- Simple form with:
  - Title field
  - Content editor (markdown or rich text)
  - Category selector
  - Tags input (optional)
  - Submit button

## Component Library Usage

Leverage shadcn UI for:

- Button variants (primary, secondary, ghost)
- Form controls
- Dialogs/modals
- Dropdown menus
- Tabs
- Cards
- Avatars

## Responsive Design

- Mobile-first approach
- Single column layout on mobile
- Sidebar content moves to tabs/accordions on mobile
- Touch-friendly tap targets (min 44px)

## Animations & Interactions

Keep animations subtle and purposeful:

- Hover effects on interactive elements
- Smooth transitions between states
- Loading states (skeletons preferred over spinners)
- Subtle feedback for actions (upvoting, posting)

## Accessibility Considerations

- Ensure proper contrast (black text on white background)
- Keyboard navigation support
- Semantic HTML
- ARIA attributes where needed
- Focus indicators

## State Management

- Use React Context for user authentication state
- Consider SWR or React Query for data fetching
- Optimistic UI updates for actions like upvoting

## API Integration Points

The frontend should connect to backend endpoints for:

- User authentication
- Fetching categories/threads/replies
- Creating/editing threads and replies
- Upvoting/downvoting
- User profile data

## Folder structure
└── 📁frontend-comp
    └── 📁app
        └── favicon.ico
        └── globals.css
        └── layout.tsx
        └── page.tsx
    └── 📁components
        └── 📁shared
            └── CategoryCard.tsx
            └── Header.tsx
        └── 📁ui
            └── avatar.tsx
            └── badge.tsx
            └── button.tsx
            └── card.tsx
            └── input.tsx
            └── navigation-menu.tsx
            └── sheet.tsx
    └── 📁copilot
        └── instructions.md
    └── 📁lib
        └── utils.ts
    └── 📁public
        └── file.svg
        └── globe.svg
        └── next.svg
        └── vercel.svg
        └── window.svg
    └── .gitignore
    └── components.json
    └── eslint.config.mjs
    └── next-env.d.ts
    └── next.config.ts
    └── package-lock.json
    └── package.json
    └── postcss.config.mjs
    └── README.md
    └── tsconfig.json
