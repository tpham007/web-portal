import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Application } from '../application/application';
import { RepositoryService } from '../repository.service';
@Pipe({
    name: 'applicationOrder'
  })
  @Injectable()
  export class ApplicationOrder implements PipeTransform {
    constructor(private repo: RepositoryService) {
    }
  
    transform(applications: Application[], args: any[]): any {
      if (Array.isArray(applications)) {
        applications.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
      }
      return applications;
    }
  }