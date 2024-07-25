import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BusinessPartnersModule } from './business-objects/business-partners/business-partners.module';
import { OrdersModule } from './business-objects/orders/orders.module';
import { InvoicesModule } from './business-objects/invoices/invoices.module';
import { ItemsModule } from './business-objects/items/items.module';
import { InventoryGenEntriesModule } from './business-objects/inventory-gen-entries/inventory-gen-entries.module';
import { InventoryGenExitsModule } from './business-objects/inventory-gen-exits/inventory-gen-exits.module';
import { PaymentsModule } from './business-objects/payments/payments.module';
import { PurchaseOrdersModule } from './business-objects/purchase-orders/purchase-orders.module';
import { QuotationsModule } from './business-objects/quotations/quotations.module';
import { DeliveryNotesModule } from './business-objects/delivery-notes/delivery-notes.module';
import { ReturnsModule } from './business-objects/returns/returns.module';
import { CompaniesModule } from './configurations/companies/companies.module';
import { UsersModule } from './configurations/users/users.module';
import { BranchesModule } from './configurations/branches/branches.module';
import { PriceListsModule } from './configurations/price-lists/price-lists.module';
import { WarehousesModule } from './configurations/warehouses/warehouses.module';
import { TaxCodesModule } from './configurations/tax-codes/tax-codes.module';
import { PaymentTermsTypesModule } from './configurations/payment-terms-types/payment-terms-types.module';
import { CurrenciesModule } from './configurations/currencies/currencies.module';
import { ProjectsModule } from './configurations/projects/projects.module';
import { AttachmentsModule } from './utilities/attachments/attachments.module';
import { MessagesModule } from './utilities/messages/messages.module';
import { ReportsModule } from './utilities/reports/reports.module';
import { ServiceCallsModule } from './utilities/service-calls/service-calls.module';
import { ActivityStatusesModule } from './utilities/activity-statuses/activity-statuses.module';
import { BanksModule } from './utilities/banks/banks.module';
import { JournalEntriesModule } from './financial-transactions/journal-entries/journal-entries.module';
import { OutgoingPaymentsModule } from './financial-transactions/outgoing-payments/outgoing-payments.module';
import { IncomingPaymentsModule } from './financial-transactions/incoming-payments/incoming-payments.module';
import { AccountBalanceModule } from './financial-transactions/account-balance/account-balance.module';
import { EmployeesInfoModule } from './human-resources/employees-info/employees-info.module';
import { EmployeeAbsenceInfoModule } from './human-resources/employee-absence-info/employee-absence-info.module';
import { EmployeeBankAccountsModule } from './human-resources/employee-bank-accounts/employee-bank-accounts.module';
import { EmployeeRolesSetupModule } from './human-resources/employee-roles-setup/employee-roles-setup.module';
import { QueryModule } from './utilities/query/query.module';
import { ProcedureModule } from './utilities/procedure/procedure.module';

@Module({
  imports: [AuthModule, BusinessPartnersModule, OrdersModule, InvoicesModule, ItemsModule, InventoryGenEntriesModule, InventoryGenExitsModule, PaymentsModule, PurchaseOrdersModule, QuotationsModule, DeliveryNotesModule, ReturnsModule, CompaniesModule, UsersModule, BranchesModule, PriceListsModule, WarehousesModule, TaxCodesModule, PaymentTermsTypesModule, CurrenciesModule, ProjectsModule, AttachmentsModule, MessagesModule, ReportsModule, ServiceCallsModule, ActivityStatusesModule, BanksModule, JournalEntriesModule, OutgoingPaymentsModule, IncomingPaymentsModule, AccountBalanceModule, EmployeesInfoModule, EmployeeAbsenceInfoModule, EmployeeBankAccountsModule, EmployeeRolesSetupModule, QueryModule, ProcedureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
