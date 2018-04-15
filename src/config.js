import { addMonths } from "date-fns";

const today = new Date();
const timeMin = today.toISOString();
const timeMax = addMonths(today, 3).toISOString();

export const calendarId =
  "vv0uj9uhqrl6j6m0pugu90uo6c@group.calendar.google.com";

export const baseUrl = "https://www.googleapis.com/calendar/v3/calendars";

const config = {
  key: "AIzaSyCG8sNlUxlUQb4_o9OGN15JSmeDKURbzR4",
  orderBy: "startTime",
  singleEvents: true,
  timeMin,
  timeMax
};

export default config;
