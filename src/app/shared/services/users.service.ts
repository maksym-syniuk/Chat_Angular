import { IUser } from './../interfaces/IUser';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Maximilian',
      surname: 'Schwarzmüller',
      online: true,
      imagePath: 'https://img-a.udemycdn.com/user/200_H/13952972_e853.jpg',
      messages: [
        {
          sender: 'user',
          date: new Date('2020-12-17T07:10:00'),
          message: 'Quickly come to the meeting room 1B, we have a big server issue!'
        },
        {
          sender: 'author',
          date: new Date('2020-12-17T07:11:00'),
          message: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?'
        },
        {
          sender: 'user',
          date: new Date('2020-12-17T07:12:00'),
          message: 'We are losing money! Quick!'
        },
      ]
    },

    {
      id: 2,
      name: 'Sapar',
      surname: 'Gandia',
      online: false,
      imagePath: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      messages: [
        {
          sender: 'user',
          date: new Date('2012-04-06T12:11:31'),
          message: 'Hey, Sapar! How are you?'
        },
        {
          sender: 'author',
          date: new Date('2012-04-06T12:12:31'),
          message: 'I am fine. So in which company are you working?'
        },
        {
          sender: 'user',
          date: new Date('2012-04-06T12:13:31'),
          message: 'I am working with Concentrix.'
        },
        {
          sender: 'author',
          date: new Date('2012-04-06T12:14:31'),
          message: 'What is your post?'
        },
        {
          sender: 'user',
          date: new Date('2012-04-06T12:15:31'),
          message: 'I am in the security department.'
        },
        {
          sender: 'author',
          date: new Date('2012-04-06T12:16:31'),
          message: 'That’s great!'
        },
        {
          sender: 'author',
          date: new Date('2012-04-06T12:19:31'),
          message: 'You have a lot of opportunities!'
        },
        {
          sender: 'user',
          date: new Date('2012-04-06T12:20:31'),
          message: 'Not that great.'
        },
        {
          sender: 'user',
          date: new Date('2012-04-06T12:20:31'),
          message: 'I am not happy with that post!'
        },
        {
          sender: 'user',
          date: new Date('2012-04-06T12:20:31'),
          message: 'I like manager post than security.'
        },
      ]
    },

    {
      id: 3,
      name: 'Ajex',
      surname: 'Garret',
      online: true,
      imagePath: 'https://specials-images.forbesimg.com/imageserve/5d70b0225b52ce0008826162/960x0.jpg?fit=scale',
      messages: [
        {
          sender: 'author',
          date: new Date('2020-05-11T16:25:31'),
          message: 'Heya! Long time no hear'
        },
        {
          sender: 'user',
          date: new Date('2020-05-11T16:26:31'),
          message: `
            Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company.
            As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company\'
            electric vehicles, battery products and solar energy products. Since company’s inception in 2003, Tesla’s mission has been to
            accelerate the world’s transition to sustainable energy. The first Tesla product, the Roadster sports car, debuted in 2008,
            followed by the Model S sedan, which was introduced in 2012, and the Model X SUV, which launched in 2015. Model S received
            Consumer Reports’ Best Overall Car and has been named the Ultimate Car of the Year by Motor Trend, while Model X was the first
            SUV ever to earn 5-star safety ratings in every category and sub-category in the National Highway Traffic Safety
            Administration’s tests. In 2017, Tesla began deliveries of Model 3, a mass-market electric vehicle
            with more than 320 miles of range, and unveiled Tesla Semi, which is designed to save owners at least $200,000 over
            a million miles based on fuel costs alone. In 2019, Tesla
            unveiled Cybertruck, which will have better utility than a traditional truck and more performance than a sports car, as well
            as the Model Y compact SUV, which began customer deliveries in early 2020.
          `
        },
        {
          sender: 'author',
          date: new Date('2020-05-11T16:27:31'),
          message: 'I’m enjoying my life to the fullest, I play with my siblings in the park near to my place as everyone including my friends is staying inside due to this Coronavirus outbreak. I don’t know why people are so scared!'
        },
        {
          sender: 'user',
          date: new Date('2020-05-11T16:28:31'),
          message: 'Really! I also feel like coming downstairs to accompany you but aren’t you aware of the lockdown orders imposed by the government?'
        },
      ]
    },

    // {
    //   id: 4,
    //   name: 'Velazquez',
    //   date: new Date(),
    //   online: true,
    // },

    // {
    //   id: 5,
    //   name: 'Janet',
    //   surname: 'Simpson',
    //   date: new Date(),
    //   online: true,
    //   imagePath: 'https://i.pinimg.com/564x/c3/12/36/c3123650da72ec2c60f7568d33c65ce5.jpg'
    // },

    // {
    //   id: 6,
    //   name: 'Scarlet',
    //   surname: 'Gomez',
    //   date: new Date(),
    //   online: false,
    //   imagePath: 'https://specials-images.forbesimg.com/imageserve/5d70b0225b52ce0008826162/960x0.jpg?fit=scale'
    // },

    // {
    //   id: 7,
    //   name: 'Bobby',
    //   surname: 'Jackson',
    //   date: new Date(),
    //   online: true,
    // },
    // {
    //   id: 8,
    //   name: 'Backie',
    //   surname: 'Thompson',
    //   date: new Date(),
    //   online: false,
    //   imagePath: 'https://wilmingtonbiz.s3.amazonaws.com/gwbj_0906_techmain.jpg'
    // },
    // {
    //   id: 9,
    //   name: 'Shannon',
    //   surname: 'Tetcher',
    //   date: new Date(),
    //   online: true,
    //   imagePath: 'https://here is incorrect url'
    // },
    // {
    //   id: 10,
    //   name: 'Max',
    //   surname: 'Sinyuk',
    //   date: new Date(),
    //   online: true,
    //   imagePath: 'https://www.economist.com/sites/default/files/images/2019/05/blogs/open-future/20190504_opp502.jpg'
    // }
  ];
  currentUser: IUser;
  currentUserChange: Subject<IUser> = new Subject<IUser>();

  getUsersArray() {
    return [...this.users];
  }

  getUser() {
    return { ...this.currentUser };
  }

  setUser(user: IUser) {
    this.currentUserChange.next({ ...user });
  }

  addMessage(userId: number, message: string) {
    const idUser = this.users.findIndex(ind => ind.id === userId);
    const newMessage = {
      sender: 'author',
      date: new Date(),
      message
    };
    this.users[idUser].messages.push(newMessage);
  }
}
