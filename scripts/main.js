var currDays = 0;
var currHours = 0;
var currMins = 0;
var currSecs = 0;

function initCircles() {
    var circleOptions = {
        animationStep: 5,
        foregroundBorderWidth: 3,
        backgroundBorderWidth: 3,
        backgroundColor: '#6348ed',
        foregroundColor: '#fff',
        noPercentageSign: 1,
        fontColor: "#fff",
        percentageY: 100,
        textColor: "#fff",
        textStyle: "font-size: 8pt",
        animation: 0
    };

    $("#circle-days").circliful(jQuery.extend({
        text: "Days"
    }, circleOptions));

    $("#circle-hours").circliful(jQuery.extend({
        text: "Hours"
    }, circleOptions));

    $("#circle-mins").circliful(jQuery.extend({
        text: "Minutes"
    }, circleOptions));

    $("#circle-secs").circliful(jQuery.extend({
        text: "Seconds"
    }, circleOptions));


    var countDownDate = new Date("Oct 23, 2017 16:30:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (currDays != days) {
            $('#circle-days').empty().removeData().circliful(jQuery.extend({
                text: "Days",
                percent: parseInt(days * 100 / 31),
                replacePercentageByText: "" + days
            }, circleOptions));
            currDays = days;
        }
        if (currHours != hours) {
            $('#circle-hours').empty().removeData().circliful(jQuery.extend({
                text: "Hours",
                percent: parseInt(hours * 100 / 60),
                replacePercentageByText: "" + hours
            }, circleOptions));
            currHours = hours;
        }
        if (currMins != minutes) {
            $('#circle-mins').empty().removeData().circliful(jQuery.extend({
                text: "Mins",
                percent: parseInt(minutes * 100 / 60),
                replacePercentageByText: "" + minutes
            }, circleOptions));
            currMins = minutes;
        }
        if (currSecs != seconds) {
            $('#circle-secs').empty().removeData().circliful(jQuery.extend({
                text: "Seconds",
                percent: parseInt(seconds * 100 / 60),
                replacePercentageByText: "" + seconds
            }, circleOptions));
            currSecs = seconds;
        }

        if (distance < 0) {
            clearInterval(x);
            console.log("expired");
        }
    }, 1000);
}
