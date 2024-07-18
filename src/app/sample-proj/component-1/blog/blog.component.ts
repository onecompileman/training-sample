import { Component } from '@angular/core';
import { Blog } from '../../shared/models/blog.model';

@Component({
  selector: 'rk-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs: Blog[] = [
    {
      id: 1,
      backgroundColor: '#FF5733',
      title: 'JavaScript Basics',
      date: '15 Jan 2024',
      tag: 'Programming',
      author: 'Alice Johnson',
      description:
        'An introduction to JavaScript covering basic concepts and syntax.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      id: 2,
      backgroundColor: '#33FF57',
      title: 'Advanced CSS Techniques',
      date: '10 Feb 2024',
      tag: 'Design',
      author: 'Bob Smith',
      description:
        'Explore advanced CSS techniques to create visually appealing designs.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    },
    {
      id: 3,
      backgroundColor: '#3357FF',
      title: 'React for Beginners',
      date: '5 Mar 2024',
      tag: 'Frontend',
      author: 'Charlie Brown',
      description:
        "A beginner's guide to building web applications using React.",
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      id: 4,
      backgroundColor: '#FF33A1',
      title: 'Understanding Flexbox',
      date: '22 Mar 2024',
      tag: 'CSS',
      author: 'Diana Green',
      description:
        'Learn how to use Flexbox to create flexible and responsive layouts.',
      headlineImageUrl:
        'https://css-tricks.com/wp-content/uploads/2018/10/01-flex-container.svg',
    },
    {
      id: 5,
      backgroundColor: '#33A1FF',
      title: 'Node.js Essentials',
      date: '30 Mar 2024',
      tag: 'Backend',
      author: 'Ethan White',
      description:
        'Get to know the essentials of Node.js for building server-side applications.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      id: 6,
      backgroundColor: '#A1FF33',
      title: 'Mastering Grid Layout',
      date: '12 Apr 2024',
      tag: 'CSS',
      author: 'Fiona Blue',
      description: 'A comprehensive guide to mastering CSS Grid Layout.',
      headlineImageUrl: 'https://gridbyexample.com/images/grid-cheat-sheet.svg',
    },
    {
      id: 7,
      backgroundColor: '#FFA133',
      title: 'TypeScript Deep Dive',
      date: '25 Apr 2024',
      tag: 'Programming',
      author: 'George Black',
      description:
        'Dive deep into TypeScript and learn advanced features and patterns.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      id: 8,
      backgroundColor: '#33FFA1',
      title: 'Web Accessibility',
      date: '3 May 2024',
      tag: 'Accessibility',
      author: 'Hannah Gray',
      description:
        'Understand the principles of web accessibility and how to implement them.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/WAI_WCAG_logo.svg',
    },
    {
      id: 9,
      backgroundColor: '#A133FF',
      title: 'Vue.js in Action',
      date: '18 May 2024',
      tag: 'Frontend',
      author: 'Ian Red',
      description: 'A practical guide to building applications with Vue.js.',
      headlineImageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    },
  
  ];

  searchTerm: string = '';
  favoritesOnly: boolean = false;
  visitedOnly: boolean = false;

  constructor() {}

  removeBlog(blogToRemove: Blog) {
    console.log('here', blogToRemove);
    const blogIndex = this.blogs.findIndex(
      (blog: Blog) => blog.id === blogToRemove.id
    );

    if (blogIndex !== -1) {
      this.blogs.splice(blogIndex, 1);
    }
  }

  blogTrackBy(index: number, blog: Blog): number {
    return blog.id;
  }
}
