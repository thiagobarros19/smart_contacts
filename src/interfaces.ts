export interface NumberContact {
  number: string;
  whatsapp: boolean;
}

export interface Contact {
  id?: number;
  name: string;
  contact: NumberContact[];
  email: string;
}

export interface Group {
  id?: number;
  name: string;
  edit: boolean;
}
