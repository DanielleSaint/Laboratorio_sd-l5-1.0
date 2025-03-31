// 4. Ed would like a way to calculate the ages of his friends.
//Export a class that will return a string containing a given friend's name and age. It should:
//Take 4 arguments - a **name**, a **year**, a **month**, and a **day** - and construct an object with those 4 properties.
//Have a public method named `returnAge()` that will return the following string: `<name> is <age> today!`

export class FriendAge {
    constructor(){
        this.name = this.name;
        this.year = this.year;
        this.month = this.month;
        this.day = this.day;
    }
}

const friend = new FriendAge();
friend.name = "Kimi";
friend.year = 1998;
friend.month = 11;
friend.day = 5;
console.log(friend);
