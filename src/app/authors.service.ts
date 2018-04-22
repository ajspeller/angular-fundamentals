import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }
  getAuthors() {
    return ['Stan Lee', 'Todd McFarland', 'Larsen'];
  }
}
