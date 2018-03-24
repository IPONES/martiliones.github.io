var fs = require('fs');

module.exports = function() {
  fs.writeFile("C:/hello.txt", "Hello мир!", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    var data = fs.readFileSync("C:/hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
  });
}
