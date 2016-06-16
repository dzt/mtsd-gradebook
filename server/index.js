var express = require('express');
var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var bodyParser = require('body-parser');
var cheerio = require('cheerio');

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.end('lol why are you here?');
});

app.post('/parseHTML', function(req, res) {

    var $ = cheerio.load(req.body, { ignoreWhitespace: false });

    var parsedResults = {
      classes: []
    };

    $('tr.listrowodd').each(function(i, element) {

      var name = $('td.cellLeft', this).eq(0).text().trim();
      var teacher = $('td.cellLeft', this).eq(1).children().remove().end().text().trim().replace(/^\s+|\s+$/gm,'');
      var grade = $('td.cellRight', this).find('td.cellRight').text().trim().replace(/^\s+|\s+$/gm,'');

      if (grade === "") {
        grade = "No Grades";
      }

      var metadata = {
        course: course,
        teacher: teacher,
        grade: grade
      };
      parsedResults.classes.push(metadata);
    });

    $('tr.listroweven').each(function(i, element) {

      var name = $('td.cellLeft', this).eq(0).text().trim();
      var teacher = $('td.cellLeft', this).eq(1).children().remove().end().text().trim().replace(/^\s+|\s+$/gm,'');
      var grade = $('td.cellRight', this).find('td.cellRight').text().trim().replace(/^\s+|\s+$/gm,'');

      if (grade === "") {
        grade = "No Grades";
      }

      var metadata = {
        course: course,
        teacher: teacher,
        grade: grade
      };
      parsedResults.classes.push(metadata);
    });

    res.json(parsedResults);

});

app.listen(server_port, server_ip_address, function () {
     console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
