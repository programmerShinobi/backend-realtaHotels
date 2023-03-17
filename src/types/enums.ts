export const AccountType = {
  card: ['Debit Card', 'Credit Card'],
  fintech: ['Dompet Realta', 'GoTo'],
};

export const enum TransactionType {
  TP = 'TP',
  TRB = 'TRB',
  RPY = 'RPY',
  RF = 'RF',
  ORM = 'ORM',
}

export const enum PaymentType {
  CR = 'Credit Card',
  C = 'Cash',
  D = 'Debit Card',
  PG = 'Payment Gateaway',
  BO = 'Bill Checkout',
}

export const enum isPaid {
  paid = 'P',
  bill = '',
}
