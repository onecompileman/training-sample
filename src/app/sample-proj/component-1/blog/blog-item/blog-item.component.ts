import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from 'src/app/sample-proj/shared/models/blog.model';

@Component({
  selector: 'rk-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input() blog?: Blog;
  @Input() highlightTerm?: string;
  @Output() onRemove = new EventEmitter();


  get highlightedDescription(): string {
    if (!this.blog) return '';
    if (!this.highlightTerm)
    return this.blog.description;

    return this.blog.description.replace(
      new RegExp(this.highlightTerm, 'g'),
      `<span class="rk-blog__highlight">${this.highlightTerm}</span>`
    );
  }

  remove() {
    this.onRemove.emit(this.blog);
  }

  visitLink() {
    if (this.blog) this.blog.visited = true;
  }

  toggleFavorite() {
    if (this.blog) this.blog.favorite = !this.blog.favorite;
  }
}
