let datas = [10, 50, 30, 70, 45, 10];
    i = 0;
    instance = 0;
    elem = "#1"
    setInterval(function() {
        let path = $(elem).find("path"),
            prodata = $(elem).find("[data-func='prodata']");
        //dataStart = (dataStart / dataMark) * 100;
        dataStart = path.attr('data-point') ? $(elem).find("path").attr('data-point') : 0;
        dataMark = prodata.attr('data-mark');
        dataStop = datas[i];
        prodata.attr({
            "data-start": dataStart,
            "data-end": dataStop
        });
        console.log(dataStart)
        setTimeout(function() {
            autoRatePoint("#1")
        }, 200);
        if (i == datas.length) {
            i = 0;
            instance = 0;
        }
        i++;
        instance = 1;
}, 10000)