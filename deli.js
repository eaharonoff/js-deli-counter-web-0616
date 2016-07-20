katzDeli = [];
otherDeli =[];
function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(person_in_arr) {
  if (person_in_arr.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
   return `Currently serving ${person_in_arr.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  }else {
    line_str = "The line is currently: ";
    for(let i=0; i < line.length; i++){
      if (i < line.length-1) {
        line_str+=`${i+1}. ${line[i]}, `
      }else {
        line_str+= `${i+1}. ${line[i]}`
      }
    }
  }
  return line_str
}