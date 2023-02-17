const PostSummaryItem = (post) => {
  return(`
  <div class="card" style="width: 100%;">
    <div class="card-body p-2">
      <div class="row">
        <div class="col-10">
          <h6 class="card-subtitle text-muted m-0">${post.topic}</h6>
          <p class="bold m-0">${post.userName} &nbsp;<i class="fa-solid fa-check"></i><span class="text-muted">&nbsp;- ${post.time}</span></p>
          <p class="bold m-0">${post.title}</p>
          <p class="text-muted m-0">${post.tweets}</p>
        </div>
        <div class="col-2">
          <img width="100%" src="${post.image}"/>
        </div>
      </div>
    </div>
  </div>
  `);
 }
 export default PostSummaryItem;