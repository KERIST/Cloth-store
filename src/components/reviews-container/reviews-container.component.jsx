import Review from "../review/review.component";
import { ReviewsContainerComponent } from "./reviews-container.styles";

const ReviewsContainer = ({ reviews }) => (
  <ReviewsContainerComponent>
    {reviews.map(({ userName, userAvatar, rating, review }) => (
      <Review
        userName={userName}
        userAvatar={userAvatar}
        rating={rating}
        review={review}
      />
    ))}
  </ReviewsContainerComponent>
);

export default ReviewsContainer;
