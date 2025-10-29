export const SAMPLE_TEMPLATES = [
  {
    name: 'Welcome Guide',
    description: 'A friendly introduction to the Markdown to PDF converter',
    content: `# Welcome to Markdown to PDF Converter! 🎉

## What is this?

This is a powerful, user-friendly tool that converts your Markdown content into beautiful PDF documents in real-time.

## Key Features

- **Real-time Preview**: See your formatted content as you type
- **PDF Export**: Convert to PDF with one click
- **Dark Mode**: Easy on the eyes with dark theme support
- **Templates**: Quick-start with pre-built templates
- **Local Storage**: Your work is automatically saved

## Getting Started

1. Start typing your markdown in the editor on the left
2. Watch the live preview on the right
3. Click "Generate PDF" when you're ready to export
4. Customize PDF options using the Options button

## Markdown Syntax Examples

### Headings
Use \`#\` for headings (# H1, ## H2, ### H3, etc.)

### Text Formatting
- **Bold text** using \`**text**\`
- *Italic text* using \`*text*\`
- ~~Strikethrough~~ using \`~~text~~\`

### Lists
Unordered lists use \`-\` or \`*\`:
- Item 1
- Item 2
- Item 3

Ordered lists use numbers:
1. First item
2. Second item
3. Third item

### Links and Images
- Links: \`[Link Text](https://example.com)\`
- Images: \`![Alt Text](image-url.jpg)\`

### Code
Inline code uses single backticks: \`const x = 10;\`

Code blocks use triple backticks:
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Blockquotes
> This is a blockquote. Use \`>\` at the start of a line.

### Horizontal Rules
Use three hyphens: \`---\`

---

## Tips

- Use the Templates button to load pre-built examples
- Import your existing Markdown files
- Export your work as .md files
- Toggle dark mode for comfortable writing

Happy writing! ✨`
  },
  {
    name: 'Project Documentation',
    description: 'Template for technical project documentation',
    content: `# Project Name

## Overview

Brief description of your project, its purpose, and main features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js v16 or higher
- npm or yarn package manager

### Steps

1. Clone the repository
\`\`\`bash
git clone https://github.com/username/project-name.git
cd project-name
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm start
\`\`\`

## Usage

### Basic Example

\`\`\`javascript
import { Component } from 'project-name';

const app = new Component({
  option1: 'value1',
  option2: 'value2'
});

app.initialize();
\`\`\`

## Features

- ✅ Feature 1: Description
- ✅ Feature 2: Description
- ✅ Feature 3: Description
- 🚧 Feature 4: Coming soon

## Configuration

Create a \`config.json\` file in the root directory:

\`\`\`json
{
  "apiUrl": "https://api.example.com",
  "timeout": 5000,
  "debug": false
}
\`\`\`

## API Documentation

### Class: Component

#### Methods

**initialize()**
- Description: Initializes the component
- Returns: \`Promise<void>\`
- Example:
\`\`\`javascript
await component.initialize();
\`\`\`

**getData(id)**
- Description: Fetches data by ID
- Parameters:
  - \`id\` (string): The unique identifier
- Returns: \`Promise<Object>\`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Last Updated**: October 2025`
  },
  {
    name: 'Meeting Notes',
    description: 'Template for structured meeting notes',
    content: `# Meeting Notes

**Date**: October 28, 2025  
**Time**: 2:00 PM - 3:00 PM  
**Location**: Conference Room A / Zoom  

## Attendees

- John Doe (Project Manager)
- Jane Smith (Lead Developer)
- Bob Johnson (Designer)
- Alice Williams (QA Engineer)

## Agenda

1. Project status update
2. Sprint review
3. Upcoming milestones
4. Blockers and challenges
5. Action items

---

## 1. Project Status Update

### Current Progress

- Frontend development: 75% complete
- Backend API: 90% complete
- Design implementation: 60% complete
- Testing: 45% complete

### Key Achievements This Week

- ✅ Completed user authentication flow
- ✅ Implemented dashboard analytics
- ✅ Fixed critical security vulnerability
- ✅ Deployed to staging environment

## 2. Sprint Review

### Completed Stories

| Story ID | Description | Points | Status |
|----------|-------------|--------|--------|
| US-101 | User login | 5 | ✅ Done |
| US-102 | Password reset | 3 | ✅ Done |
| US-103 | Profile page | 8 | ✅ Done |

### In Progress

- US-104: Dashboard widgets (60% complete)
- US-105: Notification system (30% complete)

## 3. Upcoming Milestones

- **November 5**: Beta release
- **November 15**: User acceptance testing
- **November 30**: Production deployment

## 4. Blockers and Challenges

### Blocker 1: API Rate Limiting
- **Issue**: Third-party API has rate limits affecting performance
- **Impact**: High
- **Proposed Solution**: Implement caching layer
- **Owner**: Jane Smith

### Challenge 2: Mobile Responsiveness
- **Issue**: Some components not rendering properly on mobile
- **Impact**: Medium
- **Proposed Solution**: Refactor CSS and test on multiple devices
- **Owner**: Bob Johnson

## 5. Action Items

- [ ] Jane: Implement API caching by Nov 1
- [ ] Bob: Fix mobile responsiveness issues by Nov 3
- [ ] Alice: Create test cases for new features by Nov 2
- [ ] John: Schedule client demo for Nov 5
- [ ] Team: Code review session on Nov 1 at 3 PM

## Notes

> Important: The client has requested a demo of the beta version next week. We need to ensure all critical features are working properly.

## Next Meeting

**Date**: November 4, 2025  
**Time**: 2:00 PM  
**Agenda**: Beta release review and deployment planning

---

*Notes taken by: John Doe*  
*Last updated: October 28, 2025*`
  },
  {
    name: 'Resume/CV',
    description: 'Professional resume template',
    content: `# John Doe

**Software Engineer | Full Stack Developer**

📧 john.doe@email.com | 📱 (555) 123-4567  
🔗 [linkedin.com/in/johndoe](https://linkedin.com/in/johndoe) | 💻 [github.com/johndoe](https://github.com/johndoe)  
📍 San Francisco, CA

---

## Professional Summary

Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about creating elegant solutions to complex problems and mentoring junior developers.

---

## Technical Skills

### Programming Languages
JavaScript (ES6+), TypeScript, Python, Java, SQL

### Frontend
React, Redux, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS

### Backend
Node.js, Express, Django, REST APIs, GraphQL

### Database
PostgreSQL, MongoDB, Redis, MySQL

### DevOps & Tools
Docker, Kubernetes, AWS, Git, CI/CD, Jenkins

---

## Professional Experience

### Senior Software Engineer
**Tech Company Inc.** | San Francisco, CA  
*January 2021 - Present*

- Led development of microservices architecture serving 1M+ daily active users
- Improved application performance by 40% through code optimization and caching strategies
- Mentored team of 5 junior developers, conducting code reviews and pair programming sessions
- Implemented CI/CD pipeline reducing deployment time from hours to minutes
- Technologies: React, Node.js, PostgreSQL, AWS, Docker

### Software Engineer
**Startup Solutions** | Remote  
*June 2019 - December 2020*

- Developed and maintained 10+ RESTful APIs for mobile and web applications
- Built responsive React components used across 5 different products
- Collaborated with design team to implement pixel-perfect UI/UX
- Reduced page load time by 50% through lazy loading and code splitting
- Technologies: React, Express, MongoDB, Redux

### Junior Developer
**Digital Agency** | San Francisco, CA  
*August 2018 - May 2019*

- Created custom WordPress themes and plugins for client websites
- Implemented responsive designs supporting all major browsers and devices
- Participated in daily standups and sprint planning meetings
- Technologies: JavaScript, PHP, MySQL, HTML/CSS

---

## Education

### Bachelor of Science in Computer Science
**University of California** | Berkeley, CA  
*2014 - 2018*

- GPA: 3.8/4.0
- Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development
- Dean's List: All semesters

---

## Projects

### E-Commerce Platform
*Personal Project | 2023*

- Built full-stack e-commerce platform with payment integration
- Features: Product catalog, shopping cart, user authentication, order management
- Technologies: Next.js, Node.js, Stripe API, PostgreSQL
- [View Demo](https://demo.example.com) | [GitHub](https://github.com/johndoe/ecommerce)

### Task Management App
*Open Source Contribution | 2022*

- Contributed to popular open-source task management application
- Added drag-and-drop functionality and real-time collaboration features
- 500+ stars on GitHub, used by 10,000+ users
- Technologies: React, Socket.io, MongoDB

---

## Certifications

- AWS Certified Solutions Architect - Associate (2023)
- Google Cloud Professional Developer (2022)
- MongoDB Certified Developer (2021)

---

## Achievements

- 🏆 Hackathon Winner - TechCrunch Disrupt (2022)
- 📝 Published 15+ technical articles on Medium (5,000+ followers)
- 🎤 Speaker at React Conference 2023
- ⭐ 1,000+ stars across GitHub repositories

---

## Languages

- **English**: Native
- **Spanish**: Conversational
- **Mandarin**: Basic

---

## Interests

Open source contribution, Technical writing, Mentoring, Photography, Hiking

---

*References available upon request*`
  },
  {
    name: 'Blog Post',
    description: 'Template for writing blog articles',
    content: `# The Future of Web Development: Trends to Watch in 2025

*Published on October 28, 2025 by Jane Smith*

![Hero Image](https://images.unsplash.com/photo-1498050108023-c5249f4df085)

## Introduction

The web development landscape is constantly evolving, with new technologies and frameworks emerging every year. As we navigate through 2025, several trends are reshaping how we build and deploy web applications. In this article, we'll explore the most significant developments that every developer should be aware of.

---

## 1. AI-Powered Development Tools

### The Rise of Intelligent Assistants

Artificial Intelligence has moved beyond simple code completion. Modern AI development tools can:

- 🤖 Generate entire components from natural language descriptions
- 🔍 Automatically detect and fix bugs before they reach production
- 📊 Optimize performance based on real-world usage patterns
- 🎨 Suggest UI/UX improvements based on user behavior

> "AI is not replacing developers; it's amplifying their capabilities and allowing them to focus on solving complex problems." - Tech Industry Leader

### Popular AI Tools

1. **GitHub Copilot**: Advanced code completion and generation
2. **Tabnine**: Context-aware code suggestions
3. **ChatGPT**: Problem-solving and code explanation
4. **Cursor**: AI-first code editor

---

## 2. Edge Computing and Serverless Architecture

### What is Edge Computing?

Edge computing brings computation and data storage closer to the user, resulting in:

- ⚡ Reduced latency
- 💰 Lower bandwidth costs
- 🔒 Enhanced security and privacy
- 🌍 Better global performance

### Code Example: Serverless Function

\`\`\`javascript
// Edge function example
export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  
  return new Response(\`Hello, \${name}!\`, {
    headers: { 'content-type': 'text/plain' },
  });
}
\`\`\`

---

## 3. WebAssembly Goes Mainstream

WebAssembly (Wasm) is revolutionizing web performance by allowing developers to run code written in languages like C++, Rust, and Go directly in the browser.

### Key Benefits

| Feature | Benefit |
|---------|---------|
| Performance | Near-native execution speed |
| Language Support | Use any language that compiles to Wasm |
| Security | Sandboxed execution environment |
| Portability | Run anywhere with Wasm support |

### Use Cases

- Video editing and processing
- 3D graphics and gaming
- Scientific computing
- Audio manipulation

---

## 4. Progressive Web Apps (PWAs) Evolution

PWAs continue to bridge the gap between web and native applications:

✅ Offline functionality  
✅ Push notifications  
✅ Device hardware access  
✅ App-like experience  
✅ No app store required  

---

## 5. TypeScript Dominance

TypeScript has become the de facto standard for large-scale JavaScript applications:

\`\`\`typescript
// Type-safe React component
interface UserProps {
  name: string;
  email: string;
  age: number;
}

const UserCard: React.FC<UserProps> = ({ name, email, age }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>Age: {age}</span>
    </div>
  );
};
\`\`\`

---

## Conclusion

The web development ecosystem in 2025 is more exciting than ever. From AI-powered tools to edge computing and WebAssembly, these trends are making web applications faster, more powerful, and easier to develop.

### Key Takeaways

1. Embrace AI tools to boost productivity
2. Consider edge computing for better performance
3. Explore WebAssembly for compute-intensive tasks
4. Build PWAs for cross-platform reach
5. Use TypeScript for large projects

### What's Next?

Stay curious and keep learning. The best way to stay ahead is to experiment with new technologies and build real projects. What trend are you most excited about? Share your thoughts in the comments below!

---

## Further Reading

- [Official WebAssembly Documentation](https://webassembly.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Edge Computing Best Practices](https://example.com)

---

*Tags: Web Development, JavaScript, TypeScript, AI, Edge Computing*

**About the Author**: Jane Smith is a senior software engineer with 10+ years of experience in web development. Follow her on [Twitter](https://twitter.com/janesmith) for more tech insights.`
  },
  {
    name: 'Blank Document',
    description: 'Start with a clean slate',
    content: '# Start Writing Here\n\nYour content goes here...'
  }
];

