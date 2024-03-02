// You are tasked with creating a function that generates a list of time slots within a given interval. The function should take three parameters:
// startTime (a string representing the starting time in the format "HH:MM").
// endTime (a string representing the ending time in the format "HH:MM").
// interval (an integer representing the time interval in minutes).
// The function should return a list of time slots within the specified range, with each time slot represented as a string in the "HH:MM" format. The time slots should be inclusive of the startTime and exclusive of the endTime.

// For example, if the startTime is "08:00", endTime is "12:00", and interval is 30 minutes, the function should return a list like ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"].

// Ensure that your function handles valid input formats, and provide appropriate error handling for cases where the input is invalid. Additionally, consider edge cases such as negative intervals or invalid time formats.

function schedule(st, ed, interval) {
  if (st == ed) return [];

  const [start_hour, start_minute] = st.split(":");
  const [end_hour, end_minute] = ed.split(":");

  console.log(start_hour, end_hour);
  if (start_minute == "60") {
    start_hour++;
  }

  //   if (end_minute == "60") {
  //     end_hour++;
  //   }

  return [
    ...schedule(
      `${start_hour}:${interval}`,
      `${end_hour}:${interval}`,
      interval
    ),
  ];
}

console.log(schedule("10:00", "12:00", "30"));
