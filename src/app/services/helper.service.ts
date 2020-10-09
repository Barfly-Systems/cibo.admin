import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

   constructor() { }

   static chunk = (array, size) => {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
  }

  static setTime = (dateToConvert) => {
    let t = new Date(0);
    return new Date(t.setTime((1000 * 60 * 60) * dateToConvert.hours + (t.getTimezoneOffset() * 60 * 1000))).toLocaleTimeString();
  }
  
  static parseTimeForPicker = (rawTime: string) => {
    let elements = rawTime.split(":");
    // let elements2 = elements[2].split(" ");
    // console.log(elements);  
    // console.log(elements2);
    return `${elements[0]}:${elements[1]} ${parseInt(elements[0]) < 13 ? 'AM' : 'PM'}`;
  }

  static convertPickerTimeToDateTimeObject(pickerTime){
    let elements  = pickerTime.split(':');
    let elements2 = elements[1].split(' ');
    let rawTimeObj = {hours: elements2[1] == 'PM' ? parseInt(elements[0]) + (parseInt(elements[0]) === 12 ? 0 : 12) : (parseInt(elements[0]) < 10 ?  0 + elements[0]: elements[0]), minutes: elements2[0]};
    let out = `${rawTimeObj.hours}:${rawTimeObj.minutes}:00`;
    return out;
  }

  static hasProperty = (o: any, name: string) => {
    return o.hasOwnProperty(name);
  }
}


