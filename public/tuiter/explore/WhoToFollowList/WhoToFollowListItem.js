const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item">
  <div class="row">
    <div class="col-2 p-1">
      <img class="round-img" src="${who.avatarIcon}" width="100%"/>
    </div>
    <div class="col-10">
      <p class="bold m-0 right-font-size">${who.handle} &nbsp;<i class="fa-solid fa-check"></i></p>
      <p class="m-0 right-font-size">@${who.userName}</p>
    </div>
    <button class="btn btn-primary btn-follow mt-1">Follow</button>
  </div>
</li>
  `);
 }
 export default WhoToFollowListItem;