function getFormattedDate(dateObject){
 let dd = dateObject.getDate();
 if(dd < 10) dd = '0' + dd
 let mm = dateObject.getMonth() + 1;
 if(mm < 10) mm = '0' + mm
 let yy = dateObject.getFullYear();
 let hh = dateObject.getHours();
 if(hh < 10) hh = '0'+ hh
 let mi = dateObject.getMinutes()
 if(mi < 10) mi = '0' + mi
 let day = dateObject.toLocaleString('en', {weekday: 'long'})
 



 return ` ${dd}.${mm}.${yy} ${hh}:${mi} ${day}`
}
const date0 = new Date(1993,11,1)
const date1 = new Date(1998,0,-33)
const date2 = new Date('42 03:24:00')

console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));
console.log(new Date);

