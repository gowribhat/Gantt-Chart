import { ganttData } from "./data.js";

google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('date', 'Start Time');
  data.addColumn('date', 'End Time');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows(ganttData);

  var options = {
    height: 275,
    width: 800,
    hAxis: {
      title: 'Time (in seconds)',
      format: 'decimal', // Use 's' for seconds
    },
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}
