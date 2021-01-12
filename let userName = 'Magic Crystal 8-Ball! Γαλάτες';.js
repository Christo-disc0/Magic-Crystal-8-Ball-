let userName = 'Γαλάτες';

userName ? console.log(`${userName},`) : console.log('Hello!');

let userQuestion = 'Τα χρησιμοποιείτε και ως πορτατίφ το βράδυ?';

console.log(`Βλέπω το μέλλον σας!
- ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Signs point to yes';
    break;
  case 3:
    eightBall = 'Outlook not so good';
    break;
  case 4:
    eightBall = 'Reply hazy try again';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Σιωπή. Συγκεντρώνομαι! ο_Ο Πάμε πάλι από την αρχή - Μα τον Όσιρι και μα τον Άπιι..';
    break;
  default:
    eightBall = 'Cannot predict now';
    break;
}

console.log(`${eightBall}`);
