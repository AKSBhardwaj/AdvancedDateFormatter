# AdvancedDateFormatter
Advanced Date Formatter is a lightweight JavaScript library designed for easy and flexible date formatting. It supports customizable patterns, including full month names, ordinal suffixes, ISO formatting, Unix timestamps, relative time, and more. Perfect for handling various date and time manipulation needs in your applications.
 
Features
1. Format dates in multiple customizable patterns
2. Supports full month and weekday names
Ordinal date formatting (e.g., 1st, 2nd, 3rd)
Supports Unix timestamps (seconds and milliseconds)
Relative time formatting (e.g., "2 days ago")
Week number and quarter of the year calculation
ISO 8601 formatting

**Installation**
you can include it directly in your project via a script tag:
<script src="./advanced-date-formatter.js"></script>

**Basic Example**

const formatter = new AdvancedDateFormatter(new Date());
console.log(formatter.format('YYYY-MM-DD')); // Output: 2024-10-06
console.log(formatter.format('dddd, MMMM Do, YYYY')); // Output: Sunday, October 6th, 2024
console.log(formatter.timeAgo()); // Output: "just now"

Supported Date Formats
YYYY: Full year (e.g., 2024)
YY: Last two digits of the year (e.g., 24)
MMMM: Full month name (e.g., October)
MMM: Short month name (e.g., Oct)
MM: Month as a number, zero-padded (e.g., 10)
DD: Day of the month, zero-padded (e.g., 06)
Do: Day of the month with ordinal suffix (e.g., 6th)
dddd: Full weekday name (e.g., Sunday)
ddd: Short weekday name (e.g., Sun)
HH: Hours in 24-hour format, zero-padded (e.g., 14)
hh: Hours in 12-hour format, zero-padded (e.g., 02)
mm: Minutes, zero-padded (e.g., 05)
ss: Seconds, zero-padded (e.g., 09)
A: AM/PM
Q: Quarter of the year (e.g., 4)
WW: Week number of the year
X: Unix timestamp in seconds
x: Unix timestamp in milliseconds
ISO: ISO 8601 formatted date


**Relative Time Example**

const pastDate = new AdvancedDateFormatter('2024-09-30T12:00:00Z');
console.log(pastDate.timeAgo()); // Output: "6 days ago"


**API Reference**
Constructor

new AdvancedDateFormatter(date: Date | string | number)
date: Optional. Can be a Date object, ISO string, or a timestamp. Defaults to the current date and time.


**Methods**

format(pattern: string): Returns a formatted date string based on the specified pattern.
timeAgo(): Returns a relative time string (e.g., "2 days ago").
getWeekNumber(): Returns the week number of the year.

**Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.

**License**
This project is licensed under the MIT License.

