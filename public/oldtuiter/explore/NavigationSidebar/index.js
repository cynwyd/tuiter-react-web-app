const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a class="list-group-item" href="/">
        <i class="fa fa-hashtag"></i>&nbsp;Explore</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-bell"></i>&nbsp;Notifications</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-envelope"></i>&nbsp;Messages</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-bookmark"></i>&nbsp;Bookmarks</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-list"></i>&nbsp;Lists</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-user"></i>&nbsp;Profile</a>
      <a class="list-group-item" href="/">
        <i class="fa fa-circle"></i>&nbsp;More</a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
 }
 export default NavigationSidebar;