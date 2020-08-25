'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (user_text) {
    this.text = user_text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

const newPost = new Post('John Smith', "I've got a fever, and the only prescription is...", '25.08.2020');
console.log(newPost);
newPost.edit('more cowbell!');
console.log(newPost);

const newAttachedPost = new AttachedPost('Adam West', "I've got a fever too, and the only prescription is...", '25.08.2020');
console.log(newAttachedPost);
newAttachedPost.makeTextHighlighted();
newAttachedPost.edit('even more cowbell!');
console.log(newAttachedPost);