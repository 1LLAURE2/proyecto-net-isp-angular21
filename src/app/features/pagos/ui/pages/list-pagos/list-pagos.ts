import { ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { PaymentFilterDTO } from '../../../dominio/models/payment-filter.dto';
import { Payment } from '../../../dominio/models/payment.model';
import { GetPaymentsUsecase } from '../../../application/use-case/get-payments.usecase';
import { isApiSuccess } from '../../../../../shared/models/api-response.model';
import { Meta } from '../../../dominio/models/api-response.model';
import { CommonModule } from '@angular/common';
import { CustomPaginacion } from '../../../../../shared/components/custom-paginacion/custom-paginacion';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CustomBadge } from "../../../../../shared/components/custom-badge/custom-badge";
import { CustomButton } from "../../../../../shared/components/custom-button/custom-button";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-pagos',
  standalone: true,
  imports: [CommonModule, CustomPaginacion, CustomBadge, CustomButton,FormsModule],
  templateUrl: './list-pagos.html',
  styleUrl: './list-pagos.css',
})
export class ListPagos implements OnInit {
  @Output() pageChange = new EventEmitter<number>();
  private breakpointObserver = inject(BreakpointObserver);

  isDesktop$ = this.breakpointObserver.observe([
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).pipe(
    map(result => result.matches)
  );


  payments: Payment[] = [];
  meta: Meta = {
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0
  };

  private _searchTimeout: any;

  filters: PaymentFilterDTO = {
    page: 1,
    per_page: 10,
    sort_by: 'payment_date',
    sort_dir: 'desc',
    date_from: undefined,
    date_to: undefined
  };

  constructor(private useCase: GetPaymentsUsecase,  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('INIT 🔥');
    this.loadPayments();
  }

  loadPayments() {
    console.log('LOAD 🔁', this.filters);
    this.useCase.execute(this.filters).subscribe(res => {
      console.log('RESPUESTA API 👉', res);
      if (isApiSuccess(res)) {
        this.payments = res.data ?? [];
        this.meta = res.meta ?? {
          current_page: 1,
          last_page: 1,
          per_page: 10,
          total: 0
        };

        this.cdr.detectChanges();
      } else {
        console.error(res.message);
      }
    });
  }

  onPageChange(page: number) {
    if (!page || page < 1 || page > this.meta.last_page) return;

    this.filters.page = page;
    this.loadPayments();
  }

  onSearch(search: string) {
    clearTimeout(this._searchTimeout);

    this._searchTimeout = setTimeout(() => {
      this.filters.search = search;
      this.filters.page = 1;
      this.loadPayments();
    }, 400);
  }


  resetFilters() {
    this.filters = {
      page: 1,
      per_page: 10,
      sort_by: 'payment_date',
      sort_dir: 'desc',
      date_from: undefined,
      date_to: undefined
    };

    this.loadPayments();
  }

  onViewPayment(payment: Payment) {
    console.log('Ver voucher 👉', payment);

    // aquí puedes:
    // abrir modal
    // o navegar a detalle
  }

  onPay(payment?: Payment) {
    console.log('Pagar 👉', payment);

    // abrir modal de pago
  }
}
