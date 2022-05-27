var main = function(toDoObjects) {
    "use strict";
    var toDos = toDoObjects.map(function(toDo) {
        // просто возвращаем описание
        // этой задачи
        return toDo.description;
    });
    // сейчас весь старый код должен работать в точности как раньше!
    // ...
};
$(document).ready(function() {
    $.getJSON("todos.json", function(toDoObjects) {
        // вызываем функцию main с задачами в качестве аргумента
        main(toDoObjects);
    });
});
$(document).ready(main);