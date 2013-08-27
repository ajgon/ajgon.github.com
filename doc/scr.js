data = []; 
$('ul.portfolio .item').each(function() { 
  var rel = $(this).find('.released').text().split(' ');
  var relMap = {'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dev': '12'};
  data.push({
    'id': $(this).find('.card-title').text().toLowerCase().replace(' ', '-'),
    'date': rel[1] + '-' + relMap[rel[0]] + '-',
    'title': $(this).find('.card-title').text(),
    'subtitle': $(this).find('.card-subtitle').text(),
    'url': $(this).find('.details li:last a').attr('href'),
    'client': {
      'id': $(this).find('.details li:first a').text().toLowerCase().replace(' ', '-'),
      'name': $(this).find('.details li:first a').text(),
      'url': $(this).find('.details li:first a').attr('href')
    },
    'specs': $(this).find('.specs').text().toLowerCase().split(', '),
    'promoted': $(this).hasClass('promoted')
  });
});
JSON.stringify(data);