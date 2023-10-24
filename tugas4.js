// Task Javascript Introduction
// Task 4
// Oct 24, 2023

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

data = {
  ...data,
  name: "Dzulfiqar",
  email: "shalahuddindzulfiqar@gmail.com",
  hobby: [
    "Watching the movie",
    "Listening to the music",
    "Playing Music Instrument",
  ],
};

const { street, city } = data.address;
