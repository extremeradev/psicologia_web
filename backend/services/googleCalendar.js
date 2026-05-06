// backend/services/googleCalendar.js

const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

const getEvents = async (calendarId) => {
  const response = await calendar.events.list({
    calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: "startTime",
  });

  return response.data.items.map((event) => ({
    title: "Cita",
    start: event.start.dateTime || event.start.date,
    end: event.end.dateTime || event.end.date,
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
  }));
};

module.exports = {
  getEvents,
};
