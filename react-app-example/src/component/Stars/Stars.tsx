import React from "react";
import Star from "../Star/Star";

export default function Stars({ count }: { count: number }) {
  if (count < 1 || count > 5) {
    return null;
  }
  return (
    <>
      <ul className="card-body-stars">
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <Star />
            </li>
          ))}
      </ul>
    </>
  );
}
