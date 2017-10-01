var currDays = -1;
var currHours = -1;
var currMins = -1;
var currSecs = -1;

function initCircles() {
    var circleOptions = {
        animationStep: 5,
        foregroundBorderWidth: 3,
        backgroundBorderWidth: 3,
        backgroundColor: '#6348ed',
        foregroundColor: '#fff',
        noPercentageSign: 1,
        fontColor: "#fff",
        percentageY: 102,
        textColor: "#fff",
        textStyle: "font-size: 7pt; font-family: Metropolis;",
        animation: 0,
        textAdditionalCss: "font-size: 35px; font-family: MetropolisBold;"
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

    updateTime(circleOptions);
    var x = setInterval(updateTime, 1000, circleOptions);
}


function updateTime(circleOptions) {
    var countDownDate = new Date("Oct 23, 2017 16:30:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (currDays != days) {
        $('#circle-days').empty().removeData().circliful(jQuery.extend({
            text: days == 1 ? "Day" : "Days",
            percent: parseInt(days * 100 / 31),
            replacePercentageByText: "" + days
        }, circleOptions));
        currDays = days;
    }
    if (currHours != hours) {
        $('#circle-hours').empty().removeData().circliful(jQuery.extend({
            text: hours == 1 ? "Hour" : "Hours",
            percent: parseInt(hours * 100 / 60),
            replacePercentageByText: "" + hours
        }, circleOptions));
        currHours = hours;
    }
    if (currMins != minutes) {
        $('#circle-mins').empty().removeData().circliful(jQuery.extend({
            text: minutes == 1 ? "Minute" : "Minutes",
            percent: parseInt(minutes * 100 / 60),
            replacePercentageByText: "" + minutes
        }, circleOptions));
        currMins = minutes;
    }
    if (currSecs != seconds) {
        $('#circle-secs').empty().removeData().circliful(jQuery.extend({
            text: seconds == 1 ? "Second" : "Seconds",
            percent: parseInt(seconds * 100 / 60),
            replacePercentageByText: "" + seconds
        }, circleOptions));
        currSecs = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        console.log("expired");
    }
}

