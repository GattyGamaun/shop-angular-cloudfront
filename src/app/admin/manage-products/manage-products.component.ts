import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product } from '../../products/product.interface';
import { ProductsService } from '../../products/products.service';
import { ManageProductsService } from './manage-products.service';
import { NotificationService } from '../../core/notification.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
})
export class ManageProductsComponent implements OnInit {
  readonly columns = ['from', 'description', 'price', 'count', 'action'];

  selectedFile: File | null = null;

  products$!: Observable<Product[]>;

  constructor(
    private readonly productsService: ProductsService,
    private readonly manageProductsService: ManageProductsService,
    private readonly notificationService: NotificationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onUploadCSV(): void {
    if (!this.selectedFile) {
      return;
    }

    this.manageProductsService
      .uploadProductsCSV(this.selectedFile)
      .pipe(
        catchError((error: unknown) => {
          this.notificationService.showError((error as Error).message);
          return (error as Error).message;
        })
      )
      .subscribe(() => {
        this.selectedFile = null;
        this.cdr.markForCheck();
      });
  }
}
