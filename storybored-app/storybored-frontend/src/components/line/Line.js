import React from "react";
import { Line as KonvaLine } from "react-konva";

const Line = (props) => {
  const { properties } = props;
  return (
    <KonvaLine
      id={properties.id}
      points={properties.points}
      stroke={properties.stroke}
      strokeWidth={properties.strokeWidth}
      tension={properties.tension}
      lineCap={properties.lineCap}
      lineJoin={properties.lineJoin}
      // globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
    />
  );
};

export default Line;
