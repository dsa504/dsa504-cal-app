import React, { useState } from "react";
import Calendar from "./calendar";
import { stringify } from "query-string";
import config, { calendarId, baseUrl } from "./config";
import { useFetch } from "react-fetch-hooks";

const App = props => {
  const requestUri = `${baseUrl}/${calendarId}/events?${stringify(config)}`;
  const { data, error, isFetching } = useFetch(requestUri);

  const [filter, setFilter] = useState("");
  return (
    <Calendar
      items={data ? data.items : []}
      {...{ filter, setFilter, isFetching, error }}
      {...props}
    />
  );
};

export default App;
