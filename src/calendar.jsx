import React from "react";
import Event from "./event";

const Calendar = ({ isError, items, fullScreen }) => {
  if (isError || !items) return null;

  const filteredItems = items.filter(e => e.start !== undefined);
  return (
    <div>
      {filteredItems.map(item => (
        <Event {...item} key={item.id} {...{ fullScreen }} />
      ))}
    </div>
  );
};

export default Calendar;
