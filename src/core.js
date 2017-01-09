export default function convert(datestr){
	const _datestr=datestr;
	return new Date(_datestr);
}

function stringToDate(_date,_format,_delimiter)
{
    var formatLowerCase=_format.toLowerCase();
    var formatItems=formatLowerCase.split(_delimiter);
    var dateItems=_date.split(_delimiter);
    var monthIndex=formatItems.indexOf("mm");
    var dayIndex=formatItems.indexOf("dd");
    var yearIndex=formatItems.indexOf("yyyy");
    var month=parseInt(dateItems[monthIndex]);
    month-=1;
    var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    return formatedDate;
}

stringToDate("17/9/2014","dd/MM/yyyy","/");
stringToDate("9/17/2014","mm/dd/yyyy","/")
stringToDate("9-17-2014","mm-dd-yyyy","-")