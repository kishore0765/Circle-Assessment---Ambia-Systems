import { useEffect, useState } from "react";

const circles = [
  { id: 1, top: 0, left: 130 },

  { id: 2, top: 80, left: 80 },
  { id: 3, top: 80, left: 180 },

  { id: 4, top: 130, left: 0 },

  { id: 5, top: 130, left: 130, center: true },

  { id: 6, top: 130, left: 260 },

  { id: 7, top: 180, left: 80 },
  { id: 8, top: 180, left: 180 },

  { id: 9, top: 260, left: 130 },
];

export default function Assessment() {
  const [clicked, setClicked] = useState([]);

  const handleClick = (id) => {
    if (clicked.includes(id)) return;

    setClicked((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (clicked.length === circles.length) {
      const reverseOrder = [...clicked].reverse();

      reverseOrder.forEach((id, index) => {
        setTimeout(() => {
          setClicked((prev) =>
            prev.filter((item) => item !== id)
          );
        }, (index + 1) * 500);
      });
    }
  }, [clicked]);

  return (
    <div className="container">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`circle
            ${clicked.includes(circle.id) ? "active" : ""}
            ${circle.center ? "center-circle" : ""}
          `}
          style={{
            top: `${circle.top}px`,
            left: `${circle.left}px`,
          }}
          onClick={() => handleClick(circle.id)}
        />
      ))}
    </div>
  );
}