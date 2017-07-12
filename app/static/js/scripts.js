$(function () {
  // console.log("Hello");

  var filter, table, tr, td, i;
  var name_input = $("#by_name");
  var id_input = $("#by_id");
  table = $("#myTable");
  $(name_input).on("keyup", function() {
    filter = name_input.val().toUpperCase();
    tr = $("table tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });

  $(id_input).on("keyup", function() {
    filter = id_input.val();
    // tr = table.getElementsByTagName("tr");
    tr = $("table tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });

  var ctx = document.getElementById("maternal").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
     options: {
          title: {
              display: true,
              text: 'ANC Visits 1-3 Last 12 Months'
          }
      },
    data: {
      labels: ['July 2016', 'August 2016','September 2016','October 2016','November 2016','December 2016','January 2017','February 2017','March 2017','April 2017','May 2017','June 2017'],
      datasets: [{
        label: 'Kailahun',
        data: [87.5,84.9	,75.8,	156	,118.2,	117.6,	97.1,	91.1,	91.6	,100.3,	102.5	,109],
        backgroundColor: "#8E44AD"
      }, {
        label: 'Kambia',
        data: [76.6,	72.6,	86.4,	119.7,	115.6,	126.2,	78.7,	93.5,	71.6,	79.8,	93.5,	80],
        backgroundColor: "#5DADE2"
      },
    {
        label: 'bo',
        data: [99.9,	72.9,	98.5,	128.7,	109.1,	136.9	,114.9,	84.8,	99.8,	84.8,	90.1	,99.3],
        backgroundColor: "#F1C40F"
      },
    {
        label: 'kenema',
        data: [91.6,114.3,75.3,	99.6,	81.6,	102.1,	115.1,	140.5,	135.8,	115.3,	137.4,	139.2],
        backgroundColor: "#E74C3C"
      }
    ,
    {
        label: 'bonthe',
        data: [109.1,	96.8,	116.9	,	,125.5	,	136	, 81.9,	105.4,	111,	146.2, 103.8],
        backgroundColor: "#2ECC71  "
      }
    ]
    }
  });


  var ctx = document.getElementById('maternal_line').getContext('2d');
  var maternalLineChart = new Chart(ctx, {
    type: 'line',
     options: {
          title: {
              display: true,
              text: 'ANC Visits 1-3 Last 12 Months'
          }
      },
    data: {
      labels: ['July 2016', 'August 2016','September 2016','October 2016','November 2016','December 2016','January 2017','February 2017','March 2017','April 2017','May 2017','June 2017'],
      datasets: [{
        label: 'Kailahun',
        data: [87.5,84.9	,75.8,	156	,118.2,	117.6,	97.1,	91.1,	91.6	,100.3,	102.5	,109],
        borderColor: "#8E44AD"
      }, {
        label: 'Kambia',
        data: [76.6,	72.6,	86.4,	119.7,	115.6,	126.2,	78.7,	93.5,	71.6,	79.8,	93.5,	80],
        borderColor: "#5DADE2"
      },
    {
        label: 'bo',
        data: [99.9,	72.9,	98.5,	128.7,	109.1,	136.9	,114.9,	84.8,	99.8,	84.8,	90.1	,99.3],
        borderColor: "#F1C40F"
      },
    {
        label: 'kenema',
        data: [91.6,114.3,75.3,	99.6,	81.6,	102.1,	115.1,	140.5,	135.8,	115.3,	137.4,	139.2],
        borderColor: "#E74C3C"
      }
    ,
    {
        label: 'bonthe',
        data: [109.1,	96.8,	116.9	,	,125.5	,	136	, 81.9,	105.4,	111,	146.2, 103.8],
        borderColor: "#2ECC71  "
      }
    ]
    }
  });

  new Chart(document.getElementById("myChart"), {
  type: 'line',
  options: {
        title: {
            display: true,
            text: 'Immunization of BCG, measles, yellow fever last 12 months'
        }
    },
  data: {
    labels: ['July 2016', 'August 2016','September 2016','October 2016','November 2016','December 2016','January 2017','February 2017','March 2017','April 2017','May 2017','June 2017'],
    datasets: [
	{
      label: 'BCG doses given',
      data: [21208,20311,21090,16691,17400,13634,20031,20483,19396,20410,22402,23243,21589],
      borderColor: "#8E44AD",
	  fill: false
    },
	{

      data: [17076,19144,19610,15763,16679,11798,16379,18208,17563,17422,19386,17875,17063],
      borderColor: "#5DADE2",
	   label: 'Measles doses given',
	    fill: false
    },
	{
      label: 'Yellow Fever doses given',
      data: [17064,19076,19548,14949,16362,11644,16215,17927,17373,17295,19423,17913,17074],
      borderColor: "#F1C40F",
	    fill: false
    }
	]
  }
});
});
