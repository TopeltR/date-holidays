import * as Holidays from 'date-holidays';

type Holiday = Holidays.Holiday;

const hd = new Holidays('');
hd.init('US');

hd.isHoliday(new Date('2019-06-04')); // $ExpectType false | Holiday[]
hd.isHoliday(new Date('2019-01-01')); // $ExpectType false | Holiday[]
hd.getHolidays(); // $ExpectType Holiday[]
