module.exports = function (A) {
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++) { 
    	AT[i] = [];
        for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
}