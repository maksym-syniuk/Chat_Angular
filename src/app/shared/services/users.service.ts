import { IMessage } from './../interfaces/IMessage';
import { ChuckNorrisService } from './chuck-norris.service';
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
          message: `I’m enjoying my life to the fullest, I play with my siblings in the park near to my place as everyone
           including my friends is staying inside due to this Coronavirus outbreak. I don’t know why people are so scared!`
        },
        {
          sender: 'user',
          date: new Date('2020-05-11T16:28:31'),
          message: `Really! I also feel like coming downstairs to accompany you but aren’t you aware of the lockdown orders
           imposed by the government?`
        },
      ]
    },

    {
      id: 4,
      name: 'Janet',
      surname: 'Simpson',
      online: true,
      imagePath: 'https://i.pinimg.com/564x/c3/12/36/c3123650da72ec2c60f7568d33c65ce5.jpg',
      messages: [
        {
          sender: 'user',
          date: new Date('2020-02-12T12:30:00'),
          message: `Quickly come to the meeting room 1B, we have a big server issue!`
        },
        {
          sender: 'author',
          date: new Date('2020-02-12T12:31:00'),
          message: `I\'m having breakfast right now, can\'t you wait for 10 minutes?`
        },
        {
          sender: 'user',
          date: new Date('2020-02-12T12:32:00'),
          message: `We are losing money! Quick!`
        },
      ]
    },

    {
      id: 5,
      name: 'Scarlet',
      surname: 'Gomez',
      online: false,
      imagePath: 'https://wilmingtonbiz.s3.amazonaws.com/gwbj_0906_techmain.jpg',
      messages: [
        {
          sender: 'user',
          date: new Date('2017-08-24T11:17:00'),
          message: `Hi! Are you there?`
        },
        {
          sender: 'user',
          date: new Date('2017-08-24T11:19:00'),
          message: `Hello? Hello?!?`
        },
        {
          sender: 'author',
          date: new Date('2017-08-24T11:19:00'),
          message: `Hi! I\'m here! I'm here`
        },
        {
          sender: 'user',
          date: new Date('2017-08-24T11:20:00'),
          message: `Good.`
        },
        {
          sender: 'author',
          date: new Date('2017-08-24T11:20:00'),
          message: `What's up, Scarlet?`
        },
        {
          sender: 'user',
          date: new Date('2017-08-24T11:21:00'),
          message: `Nothing...`
        },
        {
          sender: 'author',
          date: new Date('2017-08-24T11:21:00'),
          message: `OMG`
        },
      ]
    },

    {
      id: 6,
      name: 'Wes',
      surname: 'Doyle',
      online: true,
      imagePath: `https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg`,
      messages: [
        {
          sender: 'author',
          date: new Date('2019-09-09T11:17:00'),
          message: `Hey Wes, we’ve stocked our shelves with assorted mint cookie
              treats for you. Visit your local KookieU store. Hurry! This flavor is for a limited time only.?`
        },
        {
          sender: 'author',
          date: new Date('2019-09-09T11:19:00'),
          message: `Wes? Are you there?`
        },

      ]
    },

    {
      id: 7,
      name: 'Sarah',
      surname: 'McGregor',
      online: true,
      imagePath: 'https://www.economist.com/sites/default/files/images/2019/05/blogs/open-future/20190504_opp502.jpg',
      messages: [
        {
          sender: 'user',
          date: new Date('2020-06-11T19:44:00'),
          message: `So, what are your plans for this weekend?`
        },
        {
          sender: 'author',
          date: new Date('2020-06-11T19:44:00'),
          message: `I don’t know. Do you want to get together or something?`
        },
        {
          sender: 'user',
          date: new Date('2020-06-11T19:45:00'),
          message: `How about going to see a movie? Cinemax 26 on Carson Boulevard is showing Enchanted.`
        },
        {
          sender: 'author',
          date: new Date('2020-06-11T19:45:00'),
          message: `That sounds like a good idea. Maybe we should go out to eat beforehand.`
        },
        {
          sender: 'user',
          date: new Date('2020-06-11T19:45:00'),
          message: `Let’s meet at Summer Pizza House. I have not gone there for a long time.`
        },
        {
          sender: 'author',
          date: new Date('2020-06-11T19:45:00'),
          message: `Good idea again. I heard they just came up with a new pizza. It should
           be good because Summer Pizza House always has the best pizza in town.`
        },
        {
          sender: 'user',
          date: new Date('2020-06-11T19:45:00'),
          message: `When should we meet?`
        },
        {
          sender: 'author',
          date: new Date('2020-06-11T19:45:00'),
          message: `Well, the movie is shown at 2:00PM, 4:00PM, 6:00PM and 8:00PM.`
        },
      ]
    },
  ];
  currentUser: IUser;
  currentUserChange: Subject<IUser> = new Subject<IUser>();

  constructor(private chuckNorrisService: ChuckNorrisService) { }

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

    this.addAnswer(idUser);
  }

  addAnswer(idUser: number) {
    this.chuckNorrisService.fetchMessages().subscribe(res => {
      const answerMessage: IMessage = {
        sender: 'user',
        date: new Date(),
        message: res
      };
      this.users[idUser].messages.push(answerMessage);
    });
  }
}
