const User = function (name) {
    this.name = name;
    this.chatRoom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatRoom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function () {
    let users = {};//list of users 
    return {
        register: function (user) {
            users[user.name] = user;
            user.chatRoom = this;
        },
        send: function (message, from, to) {
            if (to) {
                //Single user message
                to.receive(message, from);
            }
            else {
                //Mass message(Broadcast)
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from)
                    }
                }
            }
        }
    }
}

//Create users
const brad=new User('Brad');
const jeff=new User('Jeff');
const sara=new User('Sara');
//Create chatroom
const chatroom=new Chatroom();
//Register users
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff',jeff);//Brad to Jeff: Hello Jeff
sara.send('Hello Brad, you are the best dev ever!',brad);//Sara to Brad: Hello Brad, you are the best dev ever!
jeff.send('Hello Everone!!');//Jeff to Brad: Hello Everone!!
                            // Jeff to Sara: Hello Everone!!
