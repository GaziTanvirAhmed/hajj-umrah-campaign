// This file contains the data array for Hajj campaigns and the script to populate the DataTable.
const data = [
  {
    "ت": "1",
    "الاسم الشركة / الحملة": "إبراهيم الدويسان",
    "موقع السكن": "https://maps.app.goo.gl/Acryybp5VK7MkiHBA",
    "رقم الهاتف": "https://wa.me/96597599888"
  },
  {
    "ت": "2",
    "الاسم الشركة / الحملة": "احمد حسن الكندري",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96569633366"
  },
  {
    "ت": "3",
    "الاسم الشركة / الحملة": "احمد فهد العازمي",
    "موقع السكن": "https://maps.app.goo.gl/bVj7aixGbN1M97a9A",
    "رقم الهاتف": "https://wa.me/96551008633"
  },
  {
    "ت": "4",
    "الاسم الشركة / الحملة": "احمد عبدالمحسن السبيعي",
    "موقع السكن": "https://maps.app.goo.gl/D6wEiY9C7sFzM6bk7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96597632411"
  },
  {
    "ت": "5",
    "الاسم الشركة / الحملة": "احمد مطلق الضويحي",
    "موقع السكن": "https://maps.app.goo.gl/iPvMgMmjXtqQ5nLT9",
    "رقم الهاتف": "https://wa.me/96599140015"
  },
  {
    "ت": "6",
    "الاسم الشركة / الحملة": "إسماعيل خورشيد",
    "موقع السكن": "https://maps.app.goo.gl/D6wEiY9C7sFzM6bk7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599773211"
  },
  {
    "ت": "7",
    "الاسم الشركة / الحملة": "تركي هزاع العفاسي",
    "موقع السكن": "https://maps.app.goo.gl/bVj7aixGbN1M97a9A",
    "رقم الهاتف": "https://wa.me/96551008633"
  },
  {
    "ت": "8",
    "الاسم الشركة / الحملة": "ثامر سعيد العازمي",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96551008633"
  },
  {
    "ت": "9",
    "الاسم الشركة / الحملة": "جاسم عبدالوهاب الخضر",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96599057659"
  },
  {
    "ت": "10",
    "الاسم الشركة / الحملة": "حسن طارق البغلي",
    "موقع السكن": "https://maps.app.goo.gl/EN1LEccFxo9qFhxg9?g_st=iw",
    "رقم الهاتف": "https://wa.me/96565577177"
  },
  {
    "ت": "11",
    "الاسم الشركة / الحملة": "حميد احمد صرخوه",
    "موقع السكن": "https://goo.gl/maps/vcm2SLZ5NovPfj6s9",
    "رقم الهاتف": "https://wa.me/96566671555"
  },
  {
    "ت": "12",
    "الاسم الشركة / الحملة": "خالد فالح السعدون",
    "موقع السكن": "https://maps.app.goo.gl/KE4ALPQtb81xkrbg6?g_st=iw",
    "رقم الهاتف": "https://wa.me/96551111870"
  },
  {
    "ت": "13",
    "الاسم الشركة / الحملة": "خالد رفاعي راعي الفحماء",
    "موقع السكن": "https://maps.app.goo.gl/v8efBwJxiEcTw7yN7?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96592273765"
  },
  {
    "ت": "14",
    "الاسم الشركة / الحملة": "خالد يوسف الدواس",
    "موقع السكن": "https://maps.app.goo.gl/LLyxGqwUcvYhNqCh9?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96599719615"
  },
  {
    "ت": "15",
    "الاسم الشركة / الحملة": "داود محمد الكندري",
    "موقع السكن": "https://maps.app.goo.gl/dPWykxAFUky9sUfU6?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599069672"
  },
  {
    "ت": "16",
    "الاسم الشركة / الحملة": "راشد مبارك العازمي",
    "موقع السكن": "https://maps.app.goo.gl/1CcnSpXXEChzTX6h7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96569309386"
  },
  {
    "ت": "17",
    "الاسم الشركة / الحملة": "سعد عوده الجلاسي",
    "موقع السكن": "https://maps.app.goo.gl/tCb4sC1XVb1GGpkQA?g_st=iwb",
    "رقم الهاتف": "https://wa.me/965502009547"
  },
  {
    "ت": "18",
    "الاسم الشركة / الحملة": "حسن طارق البغلي",
    "موقع السكن": "https://maps.app.goo.gl/EN1LEccFxo9qFhxg9?g_st=iw",
    "رقم الهاتف": "https://wa.me/96565577177"
  },
  {
    "ت": "19",
    "الاسم الشركة / الحملة": "عبدالرحمن عبدالكريم منشد",
    "موقع السكن": "https://maps.app.goo.gl/FveqRP2zNWLpgYeLA?g_st=iw",
    "رقم الهاتف": "https://wa.me/96551113709"
  },
  {
    "ت": "20",
    "الاسم الشركة / الحملة": "عبدالرحمن عوده الجلاسي",
    "موقع السكن": "https://maps.app.goo.gl/WPWhYHCZwKduP2ZT7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96566101053"
  },
  {
    "ت": "21",
    "الاسم الشركة / الحملة": "عبدالسلام خليفة الشايجي",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96555322760"
  },
  {
    "ت": "22",
    "الاسم الشركة / الحملة": "علي حسين ملك",
    "موقع السكن": "https://maps.app.goo.gl/BAKTcgGuMJUCgChr8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599688611"
  },
  {
    "ت": "23",
    "الاسم الشركة / الحملة": "فايز حمود العنزي",
    "موقع السكن": "https://maps.app.goo.gl/zrcWZpRNsWKGu7CZ7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599448088"
  },
  {
    "ت": "24",
    "الاسم الشركة / الحملة": "فالح جديع الصعفاق",
    "موقع السكن": "https://maps.app.goo.gl/NLx7dfRKDnTdsZ4H9",
    "رقم الهاتف": "https://wa.me/96567002424"
  },
  {
    "ت": "25",
    "الاسم الشركة / الحملة": "فايز عوض راعي الفحماء",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96551008633"
  },
  {
    "ت": "26",
    "الاسم الشركة / الحملة": "فوزي إبراهيم الدويسان",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96597599888"
  },
  {
    "ت": "27",
    "الاسم الشركة / الحملة": "فالح عوده الجلاسي",
    "موقع السكن": "https://maps.app.goo.gl/EN1LEccFxo9qFhxg9?g_st=iw",
    "رقم الهاتف": "https://wa.me/96598808090"
  },
  {
    "ت": "28",
    "الاسم الشركة / الحملة": "فهد فالح صلف المطيري",
    "موقع السكن": "https://maps.app.goo.gl/uBEXX72cUpbaVvag7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96550600386"
  },
  {
    "ت": "29",
    "الاسم الشركة / الحملة": "محمد عيسي الردهان",
    "موقع السكن": "https://maps.app.goo.gl/FveqRP2zNWLpgYeLA?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599077723"
  },
  {
    "ت": "30",
    "الاسم الشركة / الحملة": "محمد قاسم الصراف",
    "موقع السكن": "https://maps.app.goo.gl/UdU6k4K1f34G1Jwc9?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96569923231"
  },
  {
    "ت": "31",
    "الاسم الشركة / الحملة": "مشاري خالد المزيعل",
    "موقع السكن": "https://maps.app.goo.gl/FveqRP2zNWLpgYeLA?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599077723"
  },
  {
    "ت": "32",
    "الاسم الشركة / الحملة": "نبيل نجم الياسين",
    "موقع السكن": "https://maps.app.goo.gl/iPvMgMmjXtqQ5nLT9",
    "رقم الهاتف": "https://wa.me/96599055336"
  },
  {
    "ت": "33",
    "الاسم الشركة / الحملة": "شركة / حمد محمد الدوسري لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96555842233"
  },
  {
    "ت": "34",
    "الاسم الشركة / الحملة": "شركة / خالد عبدالرحمن المنصور لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96555655978"
  },
  {
    "ت": "35",
    "الاسم الشركة / الحملة": "شركة / فيصل عامش الديحاني لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96599057659"
  },
  {
    "ت": "36",
    "الاسم الشركة / الحملة": "شركة / العبدالمحسن العبدالمحسن لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/D6wEiY9C7sFzM6bk7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96566475515"
  },
  {
    "ت": "37",
    "الاسم الشركة / الحملة": "شركة العساكر لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/FveqRP2zNWLpgYeLA?g_st=iw",
    "رقم الهاتف": "https://wa.me/96555028857"
  },
  {
    "ت": "38",
    "الاسم الشركة / الحملة": "شركة / الغربين النخبة لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/vEdQWnz4EzbqXZVz9",
    "رقم الهاتف": "https://wa.me/96599306031"
  },
  {
    "ت": "39",
    "الاسم الشركة / الحملة": "شركة / الغربين التميز لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/uBEXX72cUpbaVvag7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96550600386"
  },
  {
    "ت": "40",
    "الاسم الشركة / الحملة": "شركة / النور لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96599477148"
  },
  {
    "ت": "41",
    "الاسم الشركة / الحملة": "شركة / الصيدلي لتنظيم حلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/dPWykxAFUky9sUfU6?g_st=iw",
    "رقم الهاتف": "https://wa.me/96590090411"
  },
  {
    "ت": "42",
    "الاسم الشركة / الحملة": "شركة / الفردوس لتنظيم حلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/xTYp8fxyRBuwppmP7",
    "رقم الهاتف": "https://wa.me/96550007018"
  },
  {
    "ت": "43",
    "الاسم الشركة / الحملة": "شركة / محمد الصالح لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/cWXVAigkd1h4extZ7?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96566073131"
  },
  {
    "ت": "44",
    "الاسم الشركة / الحملة": "شركة / رواحل لتنظيم رحلات الحج والعمرة",
    "موقع السكن": "https://maps.app.goo.gl/auehZvEyCL1t8UTP8",
    "رقم الهاتف": "https://wa.me/96555585551"
  },
  {
    "ت": "45",
    "الاسم الشركة / الحملة": "شركة / خداده لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/sS6yTsYRmhiHNgZc7",
    "رقم الهاتف": "https://wa.me/96555444196"
  },
  {
    "ت": "46",
    "الاسم الشركة / الحملة": "شركة / الوسام لتنظيم رجلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/h9F6RUt5wrCkTJas7",
    "رقم الهاتف": "https://wa.me/96551155666"
  },
  {
    "ت": "47",
    "الاسم الشركة / الحملة": "شركة / البراك لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/dUdQCAUzmJWeKEer8?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96598020310"
  },
  {
    "ت": "48",
    "الاسم الشركة / الحملة": "شركة / البراك النخبة لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/dUdQCAUzmJWeKEer8?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96598020310"
  },
  {
    "ت": "49",
    "الاسم الشركة / الحملة": "شركة / البراك التميز لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/yGc44yi9DuP35TW78?g_st=iw",
    "رقم الهاتف": "https://wa.me/96598020310"
  },
  {
    "ت": "50",
    "الاسم الشركة / الحملة": "شركة /البراك الماسية لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/sS6yTsYRmhiHNgZc7",
    "رقم الهاتف": "https://wa.me/96598020310"
  },
  {
    "ت": "51",
    "الاسم الشركة / الحملة": "شركة / الطبطبائي لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/zrcWZpRNsWKGu7CZ7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599121624"
  },
  {
    "ت": "52",
    "الاسم الشركة / الحملة": "شركة / اشكناني الدوية لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/JmVknaLRUg5rWzVJ8?g_st=com.google.maps.preview.copy",
    "رقم الهاتف": "https://wa.me/96599955518"
  },
  {
    "ت": "53",
    "الاسم الشركة / الحملة": "شركة / محمد عوده الجلاسي لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/EN1LEccFxo9qFhxg9?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599896761"
  },
  {
    "ت": "54",
    "الاسم الشركة / الحملة": "شركة / مجموعة النخبة لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96597805094"
  },
  {
    "ت": "55",
    "الاسم الشركة / الحملة": "شركة / مجموعة الكندري لتنظيم الحج",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96560000396"
  },
  {
    "ت": "56",
    "الاسم الشركة / الحملة": "شركة / مجموعة صفا لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96560000396"
  },
  {
    "ت": "57",
    "الاسم الشركة / الحملة": "شركة / مشاعر لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/zbNaDxKyNK2Xw6Df8?g_st=iw",
    "رقم الهاتف": "https://wa.me/96590922450"
  },
  {
    "ت": "58",
    "الاسم الشركة / الحملة": "شركة / مندكار لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/dPWykxAFUky9sUfU6?g_st=iw",
    "رقم الهاتف": "https://wa.me/96567766788"
  },
  {
    "ت": "59",
    "الاسم الشركة / الحملة": "شركة / د. وليد محمد الكندري لتنظيم الحج",
    "موقع السكن": "https://www.google.com/travel/search?ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QDBgZEgcI6A8QDBgaGAEyAhAAKgcKBToDS1dE&qs=CAEyFENnc0k2LXFlc2N6LTJiZjJBUkFCOApCCRGIve0c_K79nUIJEYr7122u5FRcQgkRLPF-d7Js-nJaPzI9qgE6EAEyHxABIhvuhJaQzCarYdI21iBwIl3naX708hP6WG1ZNREyFRACIhHZgdmG2K_ZgiDYr9mB2YTZig&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls",
    "رقم الهاتف": "https://wa.me/96598877979"
  },
  {
    "ت": "60",
    "الاسم الشركة / الحملة": "شركة / نسك لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/D6wEiY9C7sFzM6bk7?g_st=iw",
    "رقم الهاتف": "https://wa.me/96560006738"
  },
  {
    "ت": "61",
    "الاسم الشركة / الحملة": "شركة/ يوسف حسن الكندري لتنظيم رحلات الحج",
    "موقع السكن": "https://maps.app.goo.gl/4kBT5L23cSjvA1yc9?g_st=iw",
    "رقم الهاتف": "https://wa.me/96599666013"
  }
];

// Ensure the DOM is fully loaded before running the script
$(document).ready(function () {
  // Populate table from the embedded data
  data.forEach(row => {
    $('#dataTable tbody').append(`
      <tr>
        <td>${row['ت']}</td>
        <td>${row['الاسم الشركة / الحملة']}</td>
        <td class="icon-cell-location">
          <a href="${row['موقع السكن']}" target="_blank" class="icon-link">
            <img src="Image/locationIcon.png" class="icon" alt="موقع" />
          </a>
        </td>
        <td class="icon-cell-whatsapp">
          <a href="${row['رقم الهاتف']}" target="_blank" class="icon-link">
            <img src="Image/whatsappicon.png" class="icon" alt="واتساب" />
          </a>
        </td>
      </tr>
    `);
  });

  // Initialize DataTable
  $('#dataTable').DataTable({
    paging: true,
    searching: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json'
    }
  });
});