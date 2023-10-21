$(document).ready(function() {
  // Define your data for Gantt chart 1 (e.g., Bread Counter)
  var ganttData = [
    {
        name: "Bread Counter",
        desc: "Ordering and Preparation",
        values: [{
            from: "/Date(1634822400000)/",
            to: "/Date(1634826000000)/",
            label: "Ordering and Preparation"
        }]
    },
    {
        name: "Toaster Counter",
        desc: "Toasting",
        values: [{
            from: "/Date(1634822400000)/",
            to: "/Date(1634823000000)/",
            label: "Toasting"
        }]
    },
    // Add more stages or counters for food preparation
  ];
  

  // Initialize Gantt chart for the Bread Counter
  $("#chart1").gantt({
      source: ganttData,
      scale: "hour", // Customize the time scale if needed
      // Configure additional options and styles
  });
});
