import { orderData } from "./data.js";

google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var container = document.getElementById('chart_div');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Stage' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });

  orderData.forEach((order) => {
    order.forEach((stage) => {
      dataTable.addRow([stage[0], stage[1], stage[2]]);
    });
  });

  chart.draw(dataTable);
}