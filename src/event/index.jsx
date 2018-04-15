import React from "react";
import { format } from "date-fns";
import EventJsonLd from "./event-json-ld";
import injectSheet from "react-jss";
import styles from "./styles";

const Event = ({ summary, description, location, start, end, classes }) => {
  return (
    <div className={classes.root} itemScope itemType="http://schema.org/Event">
      <EventJsonLd {...{ summary, description, start, end, location }} />
      <meta itemProp="startDate" content={start.dateTime} />
      <div>
        <div className={classes.date}>
          <strong>{format(start.dateTime, "dddd")}</strong>
          {format(start.dateTime, "[, ]MMMM Do")}
        </div>
        <div className={classes.timespan}>
          {format(start.dateTime, "h:mm A")} - {format(end.dateTime, "h:mm A")}
        </div>
      </div>
      <h4 itemProp="name" className={classes.name}>
        {summary}
      </h4>
      <div className={classes.location}>{location}</div>
      <p
        itemProp="description"
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default injectSheet(styles)(Event);
