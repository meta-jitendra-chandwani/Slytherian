import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandBuilding } from './brandBuilding';
@Injectable({
  providedIn: 'root'
})
export class OrganizationBrandBuildingService {
  private urlBrandBuilding = 'http://localhost:3000/brandBuildingDropDownData';
  constructor(private http: HttpClient) { }
  getBrandBuildingName(): Observable<BrandBuilding[]> {
    return this.http.get<BrandBuilding[]>(this.urlBrandBuilding);
  }
}
