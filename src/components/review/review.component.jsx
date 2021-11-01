import { Rating } from "semantic-ui-react";

import { ReviewComponent, ReviewUserContainer, ReviewUserImage, ReviewUserName, ReviewText } from "./review.styles";

const Review = ({ userName, userAvatar, rating, review }) => (
  <ReviewComponent>
    <ReviewUserContainer>
      <ReviewUserImage src={userAvatar} alt="an image of a user" />
      <ReviewUserName>{userName}</ReviewUserName>
    </ReviewUserContainer>
    <Rating maxRating={rating} clearable />
    <ReviewText>{review}</ReviewText>
  </ReviewComponent>
);

export default Review;
