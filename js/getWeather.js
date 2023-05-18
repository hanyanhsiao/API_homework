$(function () {
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWB-87089D9E-E518-404F-B1D2-44918F8DF111&format=JSON&locationName=%E4%B8%83%E8%82%A1%E5%8D%80&elementName=T',
        type: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response);
            // console.log(response.records.locations[0].location[0].locationName);
            let locationsName = response.records.locations[0].locationsName;
            let location = response.records.locations[0].location[0].locationName;
            let tempture = response.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;
            const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let j = 0;
            // ----------------------------

            $('#city_name').html(locationsName);
            $('#district').html(location);
            $('#tempture').html(tempture + "&#176;");
            for (let i = 0; i < 10; i++) {
                // console.log($('.block').eq(i).find('small').html());
                // console.log($('.block').eq(i).find('h6').html());
                if ((i % 2) == 0) {
                    let temperature = response.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let wd = response.records.locations[0].location[0].weatherElement[0].time[i].startTime;

                    temperature = `<strong>${temperature}</strong>`
                    console.log(temperature);
                    $('.block').eq(j).find('h6').html(temperature);
                    const d = new Date(wd);
                    let day = d.getDay();
                    $('.block').eq(j).find('small').html(week[day]);
                    j++;
                }

            }



        },
        error: function (error) {
            console.log(error);
        }
    })
})