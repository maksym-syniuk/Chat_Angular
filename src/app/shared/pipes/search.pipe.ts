import { IUser } from './../interfaces/IUser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(users: IUser[], search: string = ''): IUser[] {
    if (!users || !search || !search.trim()) {
      return users;
    }
    return users.filter(user => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

  // if (!users) {
  //   return null;
  // }
  // if (!search) {
  //   return null;
  // }

  // search = search.toLowerCase();

  // return search.filter(function (item) {
  //   return JSON.stringify(item).toLowerCase().includes(args);
  // });
  // }
}
