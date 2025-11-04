import React from "react";
import ShowCard from "./ShowCard.jsx";

export default function ShowGrid({ items }) {
  return (
    <section className="gridWrap">
      <div className="grid">
        {items.map((s) => (
          <ShowCard key={s.id} band={s.band} date={s.date} />
        ))}
      </div>
    </section>
  );
}
