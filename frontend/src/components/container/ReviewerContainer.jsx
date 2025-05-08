import React, { useState } from "react";
import ReviewerCard from "../cards/ReviewerCard";
import reviewerData from "../../data/reviewerData";

function ReviewerContainer() {
  const [showAll, setShowAll] = useState(false);

  const firstColumnFull = reviewerData.filter((_, i) => i % 2 === 0);
  const secondColumnFull = reviewerData.filter((_, i) => i % 2 !== 0);

  const visibleCount = showAll ? reviewerData.length : 4;
  const firstColumn = firstColumnFull.slice(0, Math.ceil(visibleCount / 2));
  const secondColumn = secondColumnFull.slice(0, Math.floor(visibleCount / 2));

  return (
    <section className="flex flex-col items-start w-[1120px] pt-10 pb-20 gap-8">
      <div className="flex items-start justify-around w-full">
        <div className="flex flex-col items-start gap-4">
          {firstColumn.map((reviewer, index) => (
            <ReviewerCard key={`first-${index}`} {...reviewer} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-4">
          {secondColumn.map((reviewer, index) => (
            <ReviewerCard key={`second-${index}`} {...reviewer} />
          ))}
        </div>
      </div>

      {reviewerData.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer h-[36px] flex justify-center items-center gap-2 bg-white px-4 py-2 rounded-lg border border-solid border-black font-medium text-sm text-black"
        >
          {showAll ? "See less" : "Show more reviewers"}
        </button>
      )}
    </section>
  );
}

export default ReviewerContainer;
