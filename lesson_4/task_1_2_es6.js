'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(user_text) {
        this.text = user_text;
    }
}


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const newPost = new Post('John Smith', "I've got a fever, and the only prescription is...", '25.08.2020');
console.log(newPost);
newPost.edit('more cowbell!');
console.log(newPost);

const newAttachedPost = new AttachedPost('Adam West', "I've got a fever too, and the only prescription is...", '25.08.2020');
console.log(newAttachedPost);
newAttachedPost.makeTextHighlighted();
newAttachedPost.edit('even more cowbell!');
console.log(newAttachedPost);