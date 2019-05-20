if (location.search.indexOf("/") > 0) { //　年月取得
  query = new Array();
  query = location.search.split("/");
  year = parseInt(query[1]); //　年
  month = parseInt(query[2]); //　月
} else {
  today = new Date();
  year = today.getFullYear(); //　今日の年
  month = today.getMonth() + 1; //　今日の月
}
start = new Date(year + "/" + month + "/1");
startday = start.getDay(); //　１日の曜日
days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
if (month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
  days[1]++; //　うるう年
}
enddate = days[month - 1]; //　最後の日
prevyear = year; //　前月・次月
prevmonth = month - 1;
nextyear = year;
nextmonth = month + 1;
if (prevmonth < 1) {
  prevyear--;
  prevmonth += 12;
} else if (nextmonth > 12) {
  nextyear++;
  nextmonth -= 12;
}
document.write('<tr>');
document.write('<td colspan="7" align="center">');
document.write('<a href="./index?/', prevyear, '/', prevmonth, '/" "><button type="button">≪前月</button></a>　');
document.write(year, '<span ">年</span>');
document.write(month, '<span >月</span>　');
document.write('<a href="./index?/', nextyear, '/', nextmonth, '/" "><button type="button">次月≫</button></a>');
document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<center>');
document.write('<a href="./"><button type="button">今月</button></a>');
document.write('</center>');
document.write('<td align="center" style="color:red">日</td>');
document.write('<td align="center" >月</td>');
document.write('<td align="center" >火</td>');
document.write('<td align="center" >水</td>');
document.write('<td align="center" >木</td>');
document.write('<td align="center" >金</td>');
document.write('<td align="center" style="color:blue">土</td>');
document.write('</tr>');
count = 0;
for (i = 0; i < startday; i++) { //　１日の曜日までの空欄
  if (count % 7 == 0) {
    document.write('<tr>');
  }
  document.write('<td>　</td>');
  ++count;
}
for (i = 1; i <= enddate; i++) { //　日付を書き出す
  if (count % 7 == 0) {
    document.write('<tr>');
  }
  document.write('<td align="right"');
  // if (count % 7 == 0) {
  // 	document.write(' style="color:red"');
  // }
  // if (count % 7 == 6) {
  // 	document.write(' style="color:blue"');
  // }
  var day1 = new Date(2019, (5 - 1), 4);
  var day2 = new Date(year, month - 1, i);
  //差日を求める（86,400,000ミリ秒＝１日）
  var termDay = (Math.floor((day2 - day1) / 86400000));
  while (termDay < 0) {
    termDay += 6;
  }

  if (year == new Date().getFullYear() && month == new Date().getMonth() + 1 && i == new Date().getDate()) {
    document.write(' style="color:green"');
  } else if (termDay % 6 == 0 || termDay % 6 == 1 || termDay % 6 == 2) {
    if (!(termDay % 6 == 2 && day2.getDay() == 0)) {
      if (!(termDay % 6 == 2 && day2.getDay() == 3)) {
        document.write(' style="color:red"');
      }
    }
  }
  document.write('>', i, '</td>');
  ++count;
  if (count % 7 == 0) {
    document.write('</tr>');
  }
}
while (count % 7 != 0) { //　最後の日から土曜までの空欄
  document.write('<td>　</td>');
  ++count;
  if (count % 7 == 0) {
    document.write('</tr>');
  }
}
