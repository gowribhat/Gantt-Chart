$(document).ready(function() {
  // Define your data for Gantt chart 1 (e.g., Bread Counter)
  var breadCounterData = [
      {
          name: "Order 1",
          desc: "Ordering and Preparation",
          values: [{
              from: "/Date(1634822400000)/",
              to: "/Date(1634826000000)/",
              label: "Ordering and Preparation"
          }]
      },
      // Add more tasks for the Bread Counter
  ];

  // Define your data for Gantt chart 2 (e.g., Toaster Counter)
  var toasterCounterData = [
      {
          name: "Order 1",
          desc: "Toasting",
          values: [{
              from: "/Date(1634822400000)/",
              to: "/Date(1634823000000)/",
              label: "Toasting"
          }]
      },
      // Add more tasks for the Toaster Counter
  ];

  // Initialize Gantt chart for the Bread Counter
  $("#chart1").gantt({
      source: breadCounterData,
      scale: "hour", // Customize the time scale if needed
      // Configure additional options and styles
  });

  // Initialize Gantt chart for the Toaster Counter
  $("#chart2").gantt({
      source: toasterCounterData,
      scale: "hour", // Customize the time scale if needed
      // Configure additional options and styles
  });
});
