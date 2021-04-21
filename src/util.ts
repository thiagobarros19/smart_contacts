export const mask = (mask: string, value: string): string => {
  mask = mask.toLowerCase().trim();
  switch (mask) {
    case "numeros":
      value = value.replace(/\D/g, "");
      return value;
    case 'cnpj':
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
      return value;
    case 'cpf':
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      return value;
    case 'telefone':
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
      return value;
    case 'celular':
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      return value;
    case 'cep':
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
      return value;
  }
};
