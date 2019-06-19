d3.csv('js/stack-data/my_stack.csv', function(error, data) {
      if (error) {
          console.error('Error getting or parsing the data.');
          throw error;
      }
      // selection.datum() returns the bound datum for the first element in the selection and 
      //  doesn't join the specified array of data with the selected elements
      var chart = bubbleChart().width(400).height(300);
      d3.select('#chart-stack').datum(data).call(chart);
    });