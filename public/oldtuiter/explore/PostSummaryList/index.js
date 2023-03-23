import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
   return (`
      <div class="row">
          ${
            posts.map(post => {
               return(PostSummaryItem(post));
            }).join('')
          }
      </div>
`); }

export default PostSummaryList;