
/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum EWeekday {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

function isWeekend(day: EWeekday): boolean {
    return day === EWeekday.Saturday || day === EWeekday.Sunday;
}

isWeekend(EWeekday.Saturday);