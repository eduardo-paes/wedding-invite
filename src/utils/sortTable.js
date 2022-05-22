function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function sortTable(n, tableId) {
  var table, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  var rows = [];
  var xString, yString;
  table = document.getElementById(tableId);
  switching = true;

  let verified = false;
  let isNum = false;

  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    if (table) rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      /* Normalize row data */
      xString = x.innerHTML.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      yString = y.innerHTML.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      if (!verified) {
        verified = true;
        isNum = isNumeric(xString);
      }
      
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir === "asc") {
        if (isNum) {
          if (parseFloat(xString) > parseFloat(yString)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        else if (xString > yString) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (isNum) {
          if (parseFloat(xString) < parseFloat(yString)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        else if (xString < yString) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

export {
  sortTable,
  isNumeric
}