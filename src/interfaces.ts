export interface NumberContact {
  number: string;
  whatsapp: boolean;
}

export interface Contact {
  name: string;
  phone: NumberContact[];
  email: string;
}

export interface Group {
  name: string;
}
