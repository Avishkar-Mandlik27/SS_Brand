import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductReviews = ({ reviews = [] }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i)
                stars.push(<FaStar key={i} className="text-yellow-500 text-[10px]" />);
            else if (rating >= i - 0.5)
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-[10px]" />);
            else
                stars.push(<FaRegStar key={i} className="text-yellow-500 text-[10px]" />);
        }
        return stars;
    };

    if (!reviews.length)
        return (
            <div className="p-2 bg-white rounded-md shadow-sm text-center text-gray-600 text-xs">
                No reviews yet.
            </div>
        );

    return (
        <div className="space-y-2 max-w-sm mx-auto"> {/* 👈 reduced width */}
            {reviews.map((r, idx) => {
                const isExpanded = expandedIndex === idx;
                const reviewText =
                    r.review.length > 100 && !isExpanded
                        ? r.review.slice(0, 100) + "..."
                        : r.review;

                return (
                    <div
                        key={idx}
                        className="border-b pb-1 last:border-b-0 last:pb-0 bg-white rounded-md p-2 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-800 text-[12px]">{r.name}</h4>
                            <div className="flex items-center space-x-0.5 text-[10px]">
                                {renderStars(r.rating)}
                                <span className="text-gray-500 ml-1 text-[10px]">
                                    ({r.rating.toFixed(1)})
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-700 text-[11px] mt-1 leading-tight">
                            {reviewText}
                            {r.review.length > 100 && (
                                <button
                                    onClick={() => toggleReadMore(idx)}
                                    className="text-[#5C2C06] ml-1 font-medium hover:underline text-[10px]"
                                >
                                    {isExpanded ? "Read less" : "Read more"}
                                </button>
                            )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductReviews;
