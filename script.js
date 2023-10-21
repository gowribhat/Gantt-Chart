import { orderData } from "./data.js";

google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var container = document.getElementById('chart_div');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Position' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });

  orderData.forEach((order) => {
    var orderName = order.orderName;
    order.orderItems.forEach((item) => {
      dataTable.addRow([item[0], item[1], item[2], item[3]]);
    });
  });

  chart.draw(dataTable);
}