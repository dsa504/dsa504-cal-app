import React from "react";
import Event from "./event";
import { red } from "./event/styles";
import { get, uniq } from "lodash";

const Calendar = ({ isError, items, fullScreen, filter, handleSetFilter }) => {
  if (isError || !items) return null;

  const realItems = items.filter(e => e.start !== undefined);

  const filterOptions = uniq(
    realItems.map(e => get(e, "creator.email"))
  ).sort();

  const filteredItems = filter
    ? realItems.filter(e => get(e, "creator.email") === filter)
    : realItems;

  return (
    <div>
      <div className="events-filter">
        <select onChange={handleSetFilter}>
          <option value="">Filter by committee or caucus…</option>
          {filterOptions.map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <a 
          style={{ color: red, marginLeft: "auto" }}
          href="https://calendar.google.com/calendar/embed?src=vv0uj9uhqrl6j6m0pugu90uo6c%40group.calendar.google.com&ctz=America%2FChicago"
        >
          Sync with your calendar
        </a>
      </div>
      {filteredItems.map(item => (
        <Event key={item.id} {...item} {...{ fullScreen }} />
      ))}
    </div>
  );
};

export default Calendar;
