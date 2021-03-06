
document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = "0525fcf0352eb6b3ae9200927f0a8e2f";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily'";
  const ctx = document.getElementById('NYCWeatherChart').getContext('2d');

  makeRequest(URL, function(json) {
    let labels = getHourSet(json['hourly']['data'])
    let data = getFahrenheits(json['hourly']['data'])

    let tempChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: data
        }]
      },
      options: { bezierCurve: true }
    });
  });
});
