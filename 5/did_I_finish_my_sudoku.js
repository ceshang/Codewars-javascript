/*
Write a function done_or_not passing a board (list[list_lines]) as parameter. 
If the board is valid return 'Finished!', otherwise return 'Try again!'
For those who don't know the game, here are some information about rules and how to play Sudoku: 
http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
*/

--------------------My solution---------------------
function doneOrNot(board){
//Rows checked at last, since the row.sort() method changes the original dataset
var complete = [1,2,3,4,5,6,7,8,9].toString()
//compare column
  for(i=0;i<9;i++){
    var col = board.map(function(value,index) { return value[i]; }).sort().toString();
    if(col!=complete) return "Try again!";
  }
  //compare region
  for(j=0;j<3;j++){
    for(k=0;k<3;k++){
      var reg = board.slice(3*j,3*j+3).map(function(value,index){ return value.slice(3*k,3*k+3);})
               .reduce(function(prev, next) { return prev.concat(next);}).sort().toString();
      if(reg != complete) return "Try again!";
    }
    
  }
  //compare row
  for(i=0;i<9;i++){
    var row = board[i].sort().toString();
    if(col!=complete) return "Try again!";
  }
  return "Finished!";
}

----------------------------------------Another solution by "cave.on"-------------------------------------------
function doneOrNot(rows){

  var columns = []
  ,    blocks = [];
  
  for (var i = 0; i < 9; i++) {
    columns[i] = [];
    
    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];
      
      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
  
  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
  
  var is_valid = rows.every(is_valid_row) 
    && columns.every(is_valid_row) 
    && blocks.every(is_valid_row);
  
  return is_valid ? 'Finished!' : 'Try again!';
}
