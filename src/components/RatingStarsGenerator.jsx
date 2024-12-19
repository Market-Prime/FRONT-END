import React from "react";
import parseRating from "../utils/parseRating";
import { RatingStarFull, RatingStarHalf } from "./svgs";

const RenderStars = ({ rating }) => {
    const { fullStars, halfStar } = parseRating(parseFloat(rating));
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<RatingStarFull key={`full-${i}`} />);
    }
    if (halfStar) {
        stars.push(<RatingStarHalf key="half" />);
    }

    return <div className="flex gap-0 items-center">{stars}</div>;
};

export default RenderStars;
