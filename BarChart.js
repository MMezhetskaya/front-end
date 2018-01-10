function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы 
    // createElementNS первый параметр определяет пространство имен для элемента
    // <svg xmlns="http://www.w3.org/2000/svg">
    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.style.width = width+120;
    chart.style.height = height;

    // находим максимальное значение в массиве данных
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i].label) max = data[i].label;
    }


    var newText3 = document.createElementNS("http://www.w3.org/2000/svg","text");
    //для подписи значения
    newText3.setAttributeNS(null,"fill","red");
    newText3.setAttributeNS(null,"font-size","12");
    newText3.setAttributeNS(null,"text-anchor","start");

    var scale = width / max;
    var barHeight = Math.floor(height/ data.length);

    // создаем отдельный элемент диаграммы
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        var barWidth = data[i].label* scale;
        bar.setAttribute("height", barHeight-4 + "px");
        bar.setAttribute("width", barWidth+ "px");
        bar.setAttribute("x", 100);
        bar.setAttribute("y", barHeight * i );
        bar.setAttribute("data-label",data[i].label);
        bar.style.fill = color;
        bar.addEventListener("mouseover", onOver);
        bar.addEventListener("mouseout", onOut);
        chart.appendChild(bar);

        // создаем подписи областей для каждого столбца диаграммы
        var myText = data[i].name;
        var newText = document.createElementNS("http://www.w3.org/2000/svg","text");
        newText.setAttributeNS(null,"fill","gray");
        newText.setAttributeNS(null,"x","0");
        newText.setAttributeNS(null,"y",barHeight* i+ (barHeight/2)+2+"px");
        newText.setAttributeNS(null,"width","100%");
        newText.setAttributeNS(null,"height", barHeight-4 + "px");
        newText.setAttributeNS(null,"font-size","12");
        newText.setAttributeNS(null,"text-anchor","start");
        //ВОПРОС почему когда устанавливаю text-anchor end надписи пропадают?????
        newText.appendChild(document.createTextNode(myText));
        // add the text node to the SVG element
        chart.appendChild(newText);
    }

   function onOver() {//  при наведение
       this.style.fill = "red";
       var x3=parseInt(this.getAttribute("width"))+105+ "px";
       var height3=parseInt(this.getAttribute("height")) +"px";
       var y3= parseInt(this.getAttribute("y"))+parseInt(height3)/2+2+"px";

       newText3.setAttributeNS(null,"x",x3);
       newText3.setAttributeNS(null,"y",y3);
       newText3.setAttributeNS(null,"width","100%");
       newText3.setAttributeNS(null,"height", height3);
       newText3.textContent="";
       newText3.appendChild(document.createTextNode((parseInt(this.getAttribute("width")) / scale).toFixed()));
       chart.appendChild(newText3);
   }

   function onOut() {this.style.fill = color;}

    return chart;
}

