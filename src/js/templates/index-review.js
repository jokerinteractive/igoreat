{{#each review}}
  <div class="review-slider__slide">
    <img class="rewiew-slider__photo" src="http://placehold.it/100x100" alt="">
    <div class="review-slider__comment">
      <header>{{title}}</header>
      <div class="review-slider__rate">
        <div class="review-slider__rate-wrapper">
          <input class="review-slider__star" id="star-5-id-{{id}}" type="radio" name="rating{{id}}" value="5">
          <label class="review-slider__ico fa fa-star-o fa-lg" for="star-5-id-{{id}}" title="5 out of 5 stars"></label>
          <input class="review-slider__star" id="star-4-id-{{id}}" type="radio" name="rating{{id}}" value="4">
          <label class="review-slider__ico fa fa-star-o fa-lg" for="star-4-id-{{id}}" title="4 out of 5 stars"></label>
          <input class="review-slider__star" id="star-3-id-{{id}}" type="radio" name="rating{{id}}" value="3">
          <label class="review-slider__ico fa fa-star-o fa-lg" for="star-3-id-{{id}}" title="3 out of 5 stars"></label>
          <input class="review-slider__star" id="star-2-id-{{id}}" type="radio" name="rating{{id}}" value="2">
          <label class="review-slider__ico fa fa-star-o fa-lg" for="star-2-id-{{id}}" title="2 out of 5 stars"></label>
          <input class="review-slider__star" id="star-1-id-{{id}}" type="radio" name="rating{{id}}" value="1">
          <label class="review-slider__ico fa fa-star-o fa-lg" for="star-1-id-{{id}}" title="1 out of 5 stars"></label>
        </div>
      </div>
      <p>{{text}}</p>
      <span class="review-slider__date">{{date}}</span>
    </div>
  </div>
{{/each}}