function timeConvert (minutesInH) {
  let hours = Math.floor(minutesInH / 60)
  let minutes = minutesInH % 60
  return `${minutesInH} minutes =${hours} hour(s) and ${minutes} minute(s)`
}

document.write(timeConvert(200));