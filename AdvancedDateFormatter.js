class AdvancedDateFormatter {
    constructor(date = new Date()) {
        this.date = date instanceof Date ? date : new Date(date);
    }

    // Pad numbers with leading zeros
    _pad(num, size = 2) {
        return ('000' + num).slice(-size);
    }

    // Get ordinal suffix for a date
    _getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th'; // Catch 11-20
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    // Full month names
    _monthNames() {
        return [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    }

    // Weekday names
    _weekdayNames() {
        return [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
    }

    // Format date according to pattern
    format(pattern) {
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1; // 0-indexed
        const year = this.date.getFullYear();
        const hour = this.date.getHours();
        const minute = this.date.getMinutes();
        const second = this.date.getSeconds();
        const millisecond = this.date.getMilliseconds();
        const weekday = this.date.getDay();
        const timePeriod = hour >= 12 ? 'PM' : 'AM';
        const quarter = Math.floor((month - 1) / 3) + 1;

        const replacements = {
            'YYYY': year,
            'YY': year.toString().slice(-2),
            'MMMM': this._monthNames()[month - 1],
            'MMM': this._monthNames()[month - 1].slice(0, 3),
            'MM': this._pad(month),
            'M': month,
            'DD': this._pad(day),
            'D': day,
            'Do': day + this._getOrdinalSuffix(day),
            'dddd': this._weekdayNames()[weekday],
            'ddd': this._weekdayNames()[weekday].slice(0, 3),
            'HH': this._pad(hour),
            'H': hour,
            'hh': this._pad(hour % 12 || 12),
            'h': hour % 12 || 12,
            'mm': this._pad(minute),
            'm': minute,
            'ss': this._pad(second),
            's': second,
            'SSS': this._pad(millisecond, 3),
            'A': timePeriod,
            'a': timePeriod.toLowerCase(),
            'Q': quarter,
            'X': Math.floor(this.date.getTime() / 1000), // Unix timestamp (seconds)
            'x': this.date.getTime(), // Unix timestamp (milliseconds)
            'WW': this.getWeekNumber(), // Week number of the year
            'ISO': this.date.toISOString() // ISO 8601 format
        };

        return pattern.replace(/\b(YYYY|YY|MMMM|MMM|MM|M|DD|D|Do|dddd|ddd|HH|H|hh|h|mm|m|ss|s|SSS|A|a|Q|X|x|WW|ISO)\b/g, match => replacements[match]);
    }

    // Get the week number of the year
    getWeekNumber() {
        const firstDayOfYear = new Date(this.date.getFullYear(), 0, 1);
        const pastDaysOfYear = (this.date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    // Relative time formatter (e.g., "2 days ago")
    timeAgo() {
        const now = new Date();
        const diffInSeconds = Math.floor((now - this.date) / 1000);
        const timeUnits = [
            { unit: 'year', value: 365 * 24 * 60 * 60 },
            { unit: 'month', value: 30 * 24 * 60 * 60 },
            { unit: 'week', value: 7 * 24 * 60 * 60 },
            { unit: 'day', value: 24 * 60 * 60 },
            { unit: 'hour', value: 60 * 60 },
            { unit: 'minute', value: 60 },
            { unit: 'second', value: 1 }
        ];

        for (let i = 0; i < timeUnits.length; i++) {
            const unitSeconds = timeUnits[i].value;
            if (diffInSeconds >= unitSeconds) {
                const value = Math.floor(diffInSeconds / unitSeconds);
                return `${value} ${timeUnits[i].unit}${value > 1 ? 's' : ''} ago`;
            }
        }

        return 'just now';
    }
}
