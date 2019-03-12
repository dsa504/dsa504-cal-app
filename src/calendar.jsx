import React from "react";
import Event from "./event";
import { red } from "./event/styles";

const Calendar = ({ isError, items, fullScreen }) => {
  if (isError || !items) return null;

  const filteredItems = items.filter(e => e.start !== undefined);
  return (
    <div>
      <a
        style={{ color: red }}
        href="https://calendar.google.com/calendar/embed?src=vv0uj9uhqrl6j6m0pugu90uo6c%40group.calendar.google.com&ctz=America%2FChicago"
      >
        Sync with your calendar
      </a>
      {filteredItems.map(item => (
        <Event {...item} key={item.id} {...{ fullScreen }} />
      ))}
    </div>
  );
};

export default Calendar;
