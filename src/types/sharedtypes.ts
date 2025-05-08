export type InternDataResFromPersonalData = {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  learningPath: string;
  medium: string;
  paymentOption: string | null;
  paymentType: null;
  invoiceId: string[];
  createdAt: string;
  updatedAt: string;
};

export type InvoiceGenerateResponse = {
  _id: string;
  title: string;
  amount: number;
  invoiceNo: string;
  method: string;
  internId: string;
  email: string;
  status: InvoiceStatus;
  paymentDataId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type InvoiceIntern = {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  learningPath: string;
  medium: string;
  paymentOption: string;
};

export type InvoiceData = {
  _id: string;
  title: string;
  amount: number;
  invoiceNo: string;
  method: string;
  internId: InvoiceIntern;
  email: string;
  status: string;
  paymentDataId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PaysmallInvoice = {
  _id: string;
  title: string;
  amount: number;
  invoiceNo: string;
  method: string;
  internId: InternForInvoice;
  email: string;
  status: InvoiceStatus;
  paymentId: string | null;
  createdAt: string;
  updatedAt: string;
};

export enum InvoiceStatus {
  Paid = "Paid",
  Unpaid = "Unpaid",
  Pending = "Pending",
}
type InternForInvoice = {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  learningPath: string;
  medium: string;
  paymentOption: string;
};
