import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ProductoService } from "../service/producto.service";
import { Producto } from '../models/producto';

@Component({
  selector: "app-nuevo-producto",
  templateUrl: "./nuevo-producto.component.html",
  styleUrls: ["./nuevo-producto.component.css"],
})
export class NuevoProductoComponent implements OnInit {
  nombre: string = "";
  precio: number = 0;

  constructor(
    private ProductoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio);
    this.ProductoService.save(producto).subscribe(
      (data) => {
        this.toastr.success("Producto creado", "ok", {
          timeOut: 3000, positionClass: "toast-top-center",
        });
        this.router.navigate(["/"]);
      },
      (err) => {
        this.toastr.error("err.error.mensaje", "Fail", {
          timeOut: 3000, positionClass: "toast-top-center",
        });
        this.router.navigate(["/"]);
      }
    );
  }
}
