module.exports = function (A,B) {
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];


    for (var i = 0; i < rowsA; i++) C[i] = [];

    for (var k = 0; k < colsB; k++) { 
      for (var i = 0; i < rowsA; i++) { 
        var temp = 0;
          for (var j = 0; j < rowsB; j++) temp += (A[i][j]*B[j][k])*4;
          C[i][k] = temp;
        }
     }
     
    return C;
}