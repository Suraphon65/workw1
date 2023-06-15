function updateDateTimeThai() {
    var thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    
    var thaiDays = [
      "วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"
    ];
  
    var currentDateTime = new Date();
    var thaiYear = currentDateTime.getFullYear() + 543;
    var thaiMonth = thaiMonths[currentDateTime.getMonth()];
    var thaiDay = thaiDays[currentDateTime.getDay()];
    var thaiDate = currentDateTime.getDate();
    var thaiHour = currentDateTime.getHours();
    var thaiMinute = currentDateTime.getMinutes();
    var thaiSecond = currentDateTime.getSeconds();
  
    var formattedDateTime = thaiDay + "ที่ " + thaiDate + " " + thaiMonth + " " + thaiYear + " เวลา " +
      thaiHour + ":" + thaiMinute + ":" + thaiSecond;
  
    document.getElementById("current-datetime").innerHTML = formattedDateTime;
  }
//   function refreshDateTime() {
//     updateDateTimeThai();
//   }
  
//   document.getElementById("refresh-button").addEventListener("click", refreshDateTime);
  
  updateDateTimeThai();
  