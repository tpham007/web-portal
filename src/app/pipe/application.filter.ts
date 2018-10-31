import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Application } from '../application/application';

@Pipe({
    name: 'applicationFilter'
  })
  @Injectable()
  export class ApplicationFilter implements PipeTransform {
    transform(applications: Application[], args: any[]): any {
      if (args && Array.isArray(applications)) {
        // copy all objects of original array into new array of objects
        var rApplcations = applications;
        // args are the compare oprators provided in the *ngFor directive
        args.forEach(function (filterParam) {
          let filterkey = Object.keys(filterParam)[0];
          let filtervalue = filterParam[filterkey];
          applications.forEach(function (appToFilter) {
            if (appToFilter[filterkey] != filtervalue && filtervalue != "") {
              // object didn't match a filter value so remove it from array via filter
              rApplcations = rApplcations.filter(obj => obj !== appToFilter);
            }
          })
        });
        // return new array of objects to *ngFor directive
        return rApplcations;
      }
    }
  }