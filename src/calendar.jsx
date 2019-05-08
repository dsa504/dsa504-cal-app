import React from "react";
import Event from "./event";
import { red } from "./event/styles";
import { get } from "lodash";

const Calendar = ({ isError, items, fullScreen, filter, handleSetFilter }) => {
  if (isError || !items) return null;

  const realItems = items.filter(e => e.start !== undefined);

  const filteredItems = filter
    ? realItems.filter(e => get(e, "creator.email") === filter)
    : realItems;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <select style={{ padding: "5px 8px" }} onChange={handleSetFilter}>
          <option value="">Filter by committee or caucus…</option>
          <option value="hello@dsaneworleans.org">Chapter</option>
          <option value="socfem@dsaneworleans.org">
            Socialist Feminist Caucus
          </option>
        </select>
        <a
          style={{ color: red, marginLeft: "auto" }}
          href="https://calendar.google.com/calendar/embed?src=vv0uj9uhqrl6j6m0pugu90uo6c%40group.calendar.google.com&ctz=America%2FChicago"
        >
          Sync with your calendar
        </a>
      </div>
      {filteredItems.map(item => (
        <Event {...item} key={item.id} {...{ fullScreen }} />
      ))}
    </div>
  );
};

export default Calendar;
