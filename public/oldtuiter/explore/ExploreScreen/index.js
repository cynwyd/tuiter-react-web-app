import PostSummaryList from "../PostSummaryList/index.js";
const ExploreScreen = () => {
  return (`
  <div class="row">
  <div class="col-11">
    <div class="input-group mb-3">
      <span class="input-group-text bg-white search-twitter"
        ><i class="fas fa-search"></i
      ></span>
      <input
        type="text"
        class="form-control search-twitter"
        placeholder="Search Twitter"
      />
    </div>
  </div>
  <div class="col-1">
    <i
      class="fa-solid fa-gear"
      style="font-size: 38px; color: lightskyblue"
    ></i>
  </div>
</div>
<div class="row">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">For You</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Trending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">News</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Sports</a>
    </li>
    <li class="nav-item d-sm-none d-md-block">
      <a class="nav-link" href="#">Entertainment</a>
    </li>
  </ul>
  <div class="card p-0 mt-2" style="width: 100%">
    <img
      src="../../images/starship.webp"
      class="card-img-top"
      alt="..."
    />
    <div class="card-img-overlay card-inverse">
      <h2 class="text-stroke text-white pb-20" style="position:absolute; bottom:0;">SpaceX's Starship</h4>
    </div>
  </div>
  ${PostSummaryList()}
  </div>
`); }

export default ExploreScreen;