import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  productoURL = "http://localhost:8080/producto/";

  constructor(private httClient: HttpClient) {}

  public lista(): Observable<Producto[]> {
    return this.httClient.get<Producto[]>(this.productoURL + "lista");
  }

  public detail(id: number): Observable<Producto> {
    return this.httClient.get<Producto>(this.productoURL + "detail/" + id);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httClient.get<Producto>(
      this.productoURL + "detailName/" + nombre
    );
  }

  public save(producto: Producto): Observable<any> {
    return this.httClient.post<any>(this.productoURL + "create", producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httClient.put<any>(this.productoURL + "update/" + id, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httClient.delete<any>(this.productoURL + "delete/" + id);
  }

}
