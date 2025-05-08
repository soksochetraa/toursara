import React, { useState } from "react";

function ReviewerCard({
  name = "Shayna",
  date = "21 May, 2025",
  avatarUrl = "",
  review = "",
  charLimit = 150,
}) {
  const [expanded, setExpanded] = useState(false);
  const shortText = review.substring(0, charLimit);

  return (
    <div
      className={`w-[520px] grow flex flex-col gap-4 mb-[20px] transition-all duration-300 overflow-hidden ${
        expanded ? "h-auto" : "h-[200px]"
      }`}
    >
      <div className="flex items-center gap-6">
        <img
          src={avatarUrl || "https://via.placeholder.com/56x56.png?text=Avatar"}
          alt={`${name}'s avatar`}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="w-[440px] flex flex-col">
          <h6 className="font-medium text-[18px] text-black">{name}</h6>
          <p className="font-normal text-[12px] text-gray-500">{date}</p>
        </div>
      </div>
      <p className="font-normal text-base text-black">
        {expanded ? review : shortText}
        {review.length > charLimit && (
          <span
            className="pt-5 flex items-center text-[#ef3a45] cursor-pointer hover:underline w-fit"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See less" : "See more..."}
          </span>
        )}
      </p>
    </div>
  );
}

export default ReviewerCard;
