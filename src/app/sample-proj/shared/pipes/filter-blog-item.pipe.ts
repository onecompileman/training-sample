import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../models/blog.model';

@Pipe({
  name: 'filterBlogItem',
  pure: false,
})
export class FilterBlogItemPipe implements PipeTransform {
  transform(
    blogs: Blog[],
    searchTerm: string,
    favoritesOnly?: boolean,
    visitedOnly?: boolean
  ): Blog[] {
    return blogs.filter(
      (blog: Blog) =>
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        ((blog.favorite && favoritesOnly) || !favoritesOnly) &&
        ((blog.visited && visitedOnly) || !visitedOnly)
    );
  }
}
