
const data = [
    {
      "key" : 1,
      "read":false,
      "user":{
        "name":"Mark Webber",
        "photo":"avatar-mark-webber.webp"
      },
      "content":{
        "category":"post",
        "text":"reacted to your recent post",
        "post":"My first tournament today!"
      },
      "timestamp":"1m ago"
    },
    {
      "key" : 2,
      "read":false,
      "user":{
        "name":"Angela Gray",
        "photo":"avatar-angela-gray.webp"
      },
      "content":{
        "category":"follow",
        "text":"followed you",
      },
      "timestamp":"5m ago"
    },
    {
      "key" : 3,
      "read":false,
      "user":{
        "name":"Jacob Thompson",
        "photo":"avatar-jacob-thompson.webp"
      },
      "content":{
        "category":"group",
        "text":"has joined your group",
        "group":"Chess Club"
      },
      "timestamp":"1day ago"
    },
    {
      "key" : 4,
      "read":true,
      "user":{
        "name":"Rizky Hasanuddin",
        "photo":"avatar-rizky-hasanuddin.webp"
      },
      "content":{
        "category":"message",
        "text":"sent you a private message",
        "message":"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
      },
      "timestamp":"5days ago"
    },
    {
      "key" : 5,
      "read":true,
      "user":{
        "name":"Kimberly Smith",
        "photo":"avatar-kimberly-smith.webp"
      },
      "content":{
        "category":"photo",
        "text":"commented on your photo",
        "photo":"image-chess.webp"
      },
      "timestamp":"1week ago"
    },
    {
      "key" : 6,
      "read":true,
      "user":{
        "name":"Nathan Peterson",
        "photo":"avatar-nathan-peterson.webp"
      },
      "content":{
        "category":"post",
        "text":"reacted to your recent post",
        "post":"5 end-game strategies to increase your win rate"
      },
      "timestamp":"2weeks ago"
    },
    {
      "key" : 7,
      "read":true,
      "user":{
        "name":"Anna Kim",
        "photo":"avatar-anna-kim.webp"
      },
      "content":{
        "category":"group",
        "text":"left the group",
        "group":"Chess Club"
      },
      "timestamp":"2weeks ago"
    }
];

const getNotifications = () => {
    return data;
}

export {getNotifications};