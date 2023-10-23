import { Injectable } from '@angular/core';
import { PublicModule } from '../public-module/public.module';

@Injectable({
  providedIn: PublicModule 
})
export class PublicServiceService {

  constructor() { }
}
