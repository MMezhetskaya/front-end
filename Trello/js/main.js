window.onload = function () {
    var lists = [
        {ListName: "List1"},
        {ListName: "List2"}
    ];
    document.getElementById('newList').onclick = function (event) {
        //функция создает новую карточку список
        document.getElementById("list").hidden = false;
        document.getElementById("newList").hidden =true;
    }

}
