// backend/routes/calendar.routes.js

const express = require("express");
const router = express.Router();
const { getEvents } = require("../services/googleCalendar");

router.get("/events", async (req, res) => {
  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    const events = await getEvents(calendarId);
    console.error("EVENTOS:", events);
    res.json(events);
  } catch (error) {
    console.error("ERROR COMPLETO:", error);
    res.status(500).json(error);
  }
});

module.exports = router;
