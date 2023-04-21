import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background } from "../../atoms";
import { Calendar } from "react-native-calendars";
const events = [
  { id: 1, date: "2023-04-20", title: "Event 1" },
  { id: 2, date: "2023-04-20", title: "Event 2" },
  { id: 3, date: "2023-04-21", title: "Event 3" },
  { id: 5, date: "2023-04-21", title: "Event 3" },
  { id: 4, date: "2023-04-22", title: "Event 4" },
];

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <Background>
      <Text>Calendar</Text>
      <Calendar
        markedDates={{
          "2023-04-20": { marked: true, dotColor: "red" },
          "2023-04-21": { marked: true, dotColor: "red" },
          "2023-04-22": { marked: true, dotColor: "red" },
          "2023-04-25": { marked: true, dotColor: "red" },
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
      {filteredEvents.map((event) => (
        <Text key={event.id}>{event.title}</Text>
      ))}
    </Background>
  );
};

export default CalendarView;
