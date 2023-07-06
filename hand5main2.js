function convertDateFormat(date, fromFormat, toFormat) {
  var parts;
  
  if (fromFormat === 'en-CA') {
    parts = date.split('-');
  } else if (fromFormat === 'ja-JP' || fromFormat === 'ZH-CN' ) { 
    parts = date.split('/');
  } else if (fromFormat === 'ko-KR' || fromFormat === 'de-DE' || fromFormat === 'hu-HU' || fromFormat === 'ru-RU' || fromFormat === 'tr-TR' ) {  
    parts = date.split('.');
  } else {
    parts = date.split('/');
  }

  var day, month, year;

  if (fromFormat === 'en-US') {
    day = parts[1];
    month = parts[0];
    year = parts[2];
  } else if (fromFormat === 'en-CA') {
    day = parts[2];
    month = parts[1];
    year = parts[0];
  } else if (fromFormat === 'ja-JP' || fromFormat === 'ZH-CN') {
    day = parts[2];
    month = parts[1];
    year = parts[0];
  } else if (fromFormat === 'ko-KR' || fromFormat === 'hu-HU') {
    day = parts[2];
    month = parts[1];
    year = parts[0];
  } else {
    day = parts[0];
    month = parts[1];
    year = parts[2];
  }

  if (toFormat === 'fr-FR') {
    return day + '/' + month + '/' + year;
  } else if (toFormat === 'en-US') {
    return month + '/' + day + '/' + year;
  } else if (toFormat === 'de-DE') {
    return day + '.' + month + '.' + year;
  } else if (toFormat === 'en-CA') {
    return year + '-' + month + '-' + day;
  } else if (toFormat === 'ja-JP' || toFormat === 'ZH-CN') {
    return year + '/' + month + '/' + day;
  } else if (toFormat === 'ko-KR' || toFormat === 'hu-HU') {
    return year + '.' + month + '.' + day;
  } else if (toFormat === 'de-DE') {
    return day + '.' + month + '.' + year;
  } else {
    return day + '/' + month + '/' + year;
  }
}