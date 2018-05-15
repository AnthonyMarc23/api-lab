"use strict";

function getSubReddit() {
  // return $("#getReddit").val();
  // let subReddit = $("#getReddit").val();

  let promise = $.get(`https://www.reddit.com/r/${$("#getReddit").val()}/.json`);
  // let promise = $.get(`https://www.reddit.com/r/gaming/.json`)
  promise.then((data) => {
    // console.log(data);
    // redditUser = data.data.children;

    // redditUser.forEach((post) => {
    //   redditPost.author = post.data.author;
    //   redditPost.subreddit = post.data.subreddit;
    //   redditPost.previewImg = post.data.preview.images[0].source.url;
    //   redditPost.title = post.data.title;
    // });


    let count = 1;
    $(".container").html("");
    for (let post of data.data.children) {
      console.log(post);
      $(".container").append(`
        <div class="flexyItem">
          <a href="http://reddit.com${post.data.permalink}">
            <h4>${post.data.title} by <span class="author">${post.data.author}</span></h4>
            <img class="resize" src="${post.data.preview.images["0"].source.url}">
          </a>
        </div>
        `);
      count++;
      if (count > 12) {break};
    };

  });

};


$(document).ready(() => {


});

    // Put all your code to handle the response inside this function.
    // console.log(data.title);
    // console.log(data.language);
    // console.log(data.posts.length);
    // console.log(data.posts[0].title);
    
  
    // data.posts.forEach((data) => {
    //   data.tags.forEach((index) => {
    //     console.log(index);
    //   });
    // });

    // data.posts.forEach((data) => {
    //   for (let i = 0; i < data.tags.length; i++) {
    //     console.log(data.tags[i]);
    //   }
    // });

    // for (let i = 0; i < data.posts.length; i++) {
    //   for (let j = 0; j < data.posts[i].tags.length; j++) {
    //     console.log(data.posts[i].author + ", " + data.posts[i].tags[j]);
    //   }
    // }

    // $.get("https://www.reddit.com/r/aww/.json")
    
    // .done((responseData) => {
    //   console.log("DONE", responseData.data.children[0].data.title);
    // })

    // .fail(() => {
    //   console.log("FAIL");
    // })

    // .always(() => {
    // console.log("ALWAYS");
    // });



    // for (let post of data.data.children) {
    //   console.log(post);
    //   $("body").append(`
    //     <div>
    //       <h4>${post.data.title}</h4>
    //       <p>${post.data.author}</h4>
    //       <img src="${post.data.preview.images["0"].source.url}">
    //     </div>
    //   `)
    // };
