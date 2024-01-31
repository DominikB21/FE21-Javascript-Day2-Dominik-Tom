function TimeConvert(minutes){
    
    let hrs = Math.round(minutes / 60);
    let min = minutes % 60;

    document.write(`${minutes} minutes = ${hrs} hour(s) and ${min} minute(s).`);
}

TimeConvert(200);