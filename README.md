**JSAdvancedDateFormatter** is a lightweight JavaScript utility that provides advanced date formatting, including customizable date patterns, relative time formatting (e.g., "2 days ago"), and support for Unix timestamps and ISO 8601 formats. It’s designed to be both versatile and easy to use.

## Installation

You can install **JSAdvancedDateFormatter** via npm:

```bash
npm install js-advanced-date-formatter
```

## Getting Started

1. Import the Library:
   If you're using it in a Node.js or front-end JavaScript environment, import it as follows:

```bash
const JSAdvancedDateFormatter = require('js-advanced-date-formatter');
```

Or, if you use ES6 modules:

```bash
import JSAdvancedDateFormatter from 'js-advanced-date-formatter';
```

2. Creating an Instance:
   Create an instance of JSAdvancedDateFormatter by passing a date (or leaving it blank to use the current date):

```bash
const formatter = new JSAdvancedDateFormatter();
```

Or, pass a specific date:

```bash
const specificDate = new Date('2024-10-05T14:48:00');
const formatter = new JSAdvancedDateFormatter(specificDate);

```

## Features

1. Custom Date Formatting
   The utility supports formatting dates using a customizable pattern string with the following placeholders:

**Year:**

- YYYY: Full year (e.g., 2024)
- YY: Last two digits of the year (e.g., 24)

**Month:**

- MMMM: Full month name (e.g., October)
- MMM: Short month name (e.g., Oct)
- MM: Two-digit month (e.g., 10)
- M: One or two-digit month (e.g., 10)

**Day:**

- DD: Two-digit day of the month (e.g., 05)
- D: Day of the month (e.g., 5)
- Do: Day of the month with ordinal suffix (e.g., 5th)

**Weekday:**
dddd: Full weekday name (e.g., Sunday)
ddd: Short weekday name (e.g., Sun)

**Time:**

- HH: Two-digit 24-hour format (e.g., 14)
- H: Hour in 24-hour format (e.g., 14)
- hh: Two-digit 12-hour format (e.g., 02)
- h: Hour in 12-hour format (e.g., 2)
- mm: Two-digit minute (e.g., 48)
- m: Minute (e.g., 48)
- ss: Two-digit second (e.g., 05)
- s: Second (e.g., 5)
- SSS: Milliseconds (e.g., 123)

**Time Period:**

- A: Uppercase AM/PM (e.g., PM)
- a: Lowercase am/pm (e.g., pm)

**Quarter:**

- Q: Quarter of the year (1-4)

**Unix Timestamps:**

- X: Unix timestamp in seconds
- x: Unix timestamp in milliseconds

**ISO Format:**

- ISO: ISO 8601 format (e.g., 2024-10-05T14:48:00.000Z)

```bash
Example:
const date = new Date('2024-10-05T14:48:00');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('YYYY-MM-DD HH:mm:ss'));
// Output: 2024-10-05 14:48:00

console.log(formatter.format('dddd, Do MMMM YYYY, h:mm A'));
// Output: Sunday, 5th October 2024, 2:48 PM
```

2. Ordinal Suffix for Days:
   Automatically adds the correct ordinal suffix for day numbers (e.g., "1st", "2nd", "3rd", "4th").

```bash
const date = new Date('2024-10-01');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('Do MMMM YYYY'));
// Output: 1st October 2024
```

3. Full Month and Weekday Names:
   Supports full and abbreviated month and weekday names:

- Months: January, February, ..., December
- Weekdays: Sunday, Monday, ..., Saturday

```bash
const date = new Date('2024-10-05');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('dddd, MMMM D, YYYY'));
// Output: Sunday, October 5, 2024
```

4. Relative Time Formatting:
   The timeAgo method calculates how long ago a certain date was and returns a human-readable string like:

- "Just now"
- "5 seconds ago"
- "3 minutes ago"
- "2 days ago"
- "1 year ago"

```bash
const pastDate = new Date('2024-09-30T10:30:00');
const formatter = new JSAdvancedDateFormatter(pastDate);

console.log(formatter.timeAgo());
// Output: 5 days ago (depending on current date)
```

5. Unix Timestamp Support:
   Convert dates to Unix timestamps (both in seconds and milliseconds):

- X: Unix timestamp in seconds
- x: Unix timestamp in milliseconds

```bash
const currentDate = new JSAdvancedDateFormatter();
console.log(currentDate.format('X'));
// Output: Unix timestamp in seconds (e.g., 1733408880)

console.log(currentDate.format('x'));
// Output: Unix timestamp in milliseconds (e.g., 1733408880123)
```

6. ISO 8601 Date Format:
   Generate ISO 8601 date strings, which are useful for handling dates in standardized formats (e.g., 2024-10-05T14:48:00.000Z).

```bash
const date = new Date('2024-10-05T14:48:00');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('ISO'));
// Output: 2024-10-05T14:48:00.000Z
```

7. Week Number Calculation:
   The getWeekNumber method returns the week number of the year for a given date. For example, the 40th week of 2024.

```bash
const date = new Date('2024-10-05');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.getWeekNumber());
// Output: 40 (40th week of the year)
```

8. Quarter of the Year:
   Easily determine which quarter (1st, 2nd, 3rd, or 4th) the date falls into using the Q placeholder.

```bash
const date = new Date('2024-05-15');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('Q'));
// Output: 2 (2nd quarter of the year)
```

9. AM/PM Time Period:
   Support for formatting times with AM/PM (both uppercase and lowercase).

```bash
const date = new Date('2024-10-05T14:48:00');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('h:mm A'));
// Output: 2:48 PM

console.log(formatter.format('h:mm a'));
// Output: 2:48 pm
```

10. Handles Various Date Inputs:
    The constructor accepts multiple date formats:

- JavaScript Date objects
- ISO strings
- String representations of dates
- Unix timestamps

```bash
// Using Date object
const formatter1 = new JSAdvancedDateFormatter(new Date());

// Using ISO string
const formatter2 = new JSAdvancedDateFormatter('2024-10-05T14:48:00');

// Using Unix timestamp
const formatter3 = new JSAdvancedDateFormatter(1733408880123);
```

11. Flexible Date Parsing and Formatting:
    Easily handle complex date patterns using customizable formats for full control over the output, such as:

- YYYY-MM-DD HH:mm:ss → 2024-10-05 14:48:00
- dddd, Do MMMM YYYY, h:mm A → Sunday, 5th October 2024, 2:48 PM

```bash
const date = new Date('2024-10-05T14:48:00');
const formatter = new JSAdvancedDateFormatter(date);

// Using a simple date-time format
console.log(formatter.format('YYYY-MM-DD HH:mm:ss'));
// Output: 2024-10-05 14:48:00

// Using a more detailed and descriptive format
console.log(formatter.format('dddd, Do MMMM YYYY, h:mm A'));
// Output: Sunday, 5th October 2024, 2:48 PM
```

12. Zero Padding:
    Automatically pads numbers (e.g., months, days, hours) with leading zeros when required (e.g., 05 instead of 5).

```bash
const date = new Date('2024-10-05T04:08:03');
const formatter = new JSAdvancedDateFormatter(date);

console.log(formatter.format('YYYY-MM-DD HH:mm:ss'));
// Output: 2024-10-05 04:08:03
```

13. Supports Leap Years and Edge Cases:
    Correctly handles leap years and other edge cases like time zones, ensuring accurate date and time calculations.

```bash
const leapYearDate = new Date('2024-02-29');
const formatter = new JSAdvancedDateFormatter(leapYearDate);

console.log(formatter.format('YYYY-MM-DD'));
// Output: 2024-02-29
```

The utility is lightweight, with no external dependencies, making it a good choice for projects that need an efficient date formatter without adding unnecessary bulk.

## ❤❤❤Happy Coding❤❤❤
