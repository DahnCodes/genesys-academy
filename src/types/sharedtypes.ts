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
  invoiceId: string[];
  // invoiceId: Invoice[];
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

// type ApiResponse = {
//     success: boolean;
//     message: string;
//     data: InternDataResFromPersonalData;
//     redirectUrl: string;
//   };

// interface Invoice {
//   _id: string;
//   title: string;
//   amount: number;
//   invoiceNo: string;
//   method: string;
//   email: string;
//   status: string;
//   paymentDataId: string | null;
// }

export type InvoiceGenerateResponse = {
  _id: string;
  title: string;
  amount: number;
  invoiceNo: string;
  method: string;
  internId: string;
  email: string;
  status: string;
  paymentDataId: string | null;
  createdAt: string;
  updatedAt: string;
};

//   --

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

// ---

type InvoiceStatus = "Not paid" | "Paid" | "Pending";

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

// type ApiResponse = {
//   success: boolean;
//   message: string;
//   data: Invoice[];
//   redirectUrl: string;
// };

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

// -----
