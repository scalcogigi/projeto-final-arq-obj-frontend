import React from "react";

export default function ShowCard({ band, date }) {
  return (
    <article className="card" aria-label={`${band} - ${date}`}>
      <div className="card__footer">
        <div className="card__band">{band}</div>
        <div className="card__date">{date}</div>
      </div>
    </article>
  );
}
