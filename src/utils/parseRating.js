const parseRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return {
        fullStars,
        halfStar: hasHalfStar ? 1 : 0,
    };
};

export default parseRating;
