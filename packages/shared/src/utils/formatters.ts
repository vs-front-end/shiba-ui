export const removeNonDigits = (value: string): string => {
  return value.replace(/\D/g, '');
};

export const formatPhone = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 10);

  return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, p1, p2, p3) => {
    if (p3) return `(${p1}) ${p2}-${p3}`;
    if (p2) return `(${p1}) ${p2}`;
    if (p1) return `(${p1}`;

    return numbers;
  });
};

export const formatCellphone = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 11);

  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, p1, p2, p3) => {
      if (p3) return `(${p1}) ${p2}-${p3}`;
      if (p2) return `(${p1}) ${p2}`;
      if (p1) return `(${p1}`;

      return numbers;
    });
  }

  return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (_, p1, p2, p3) => {
    if (p3) return `(${p1}) ${p2}-${p3}`;
    if (p2) return `(${p1}) ${p2}`;
    if (p1) return `(${p1}`;

    return numbers;
  });
};

export const formatCpf = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 11);
  return numbers.replace(
    /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
    (_, p1, p2, p3, p4) => {
      if (p4) return `${p1}.${p2}.${p3}-${p4}`;
      if (p3) return `${p1}.${p2}.${p3}`;
      if (p2) return `${p1}.${p2}`;
      if (p1) return p1;
      return numbers;
    }
  );
};

export const formatCnpj = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 14);

  return numbers.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/,
    (_, p1, p2, p3, p4, p5) => {
      if (p5) return `${p1}.${p2}.${p3}/${p4}-${p5}`;
      if (p4) return `${p1}.${p2}.${p3}/${p4}`;
      if (p3) return `${p1}.${p2}.${p3}`;
      if (p2) return `${p1}.${p2}`;
      if (p1) return p1;

      return numbers;
    }
  );
};

export const formatCep = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 8);

  return numbers.replace(/(\d{5})(\d{0,3})/, (_, p1, p2) => {
    if (p2) return `${p1}-${p2}`;

    return p1;
  });
};

export const formatMonetary = (value: string): string => {
  const numbers = removeNonDigits(value);
  const cents = parseInt(numbers, 10) || 0;

  const formatted = (cents / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `R$ ${formatted}`;
};

export const formatDate = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 8);

  return numbers.replace(/(\d{2})(\d{2})(\d{0,4})/, (_, p1, p2, p3) => {
    if (p3) return `${p1}/${p2}/${p3}`;
    if (p2) return `${p1}/${p2}`;
    if (p1) return p1;

    return numbers;
  });
};

export const formatCreditCard = (value: string): string => {
  const numbers = removeNonDigits(value).slice(0, 16);

  return numbers.replace(
    /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
    (_, p1, p2, p3, p4) => {
      if (p4) return `${p1} ${p2} ${p3} ${p4}`;
      if (p3) return `${p1} ${p2} ${p3}`;
      if (p2) return `${p1} ${p2}`;
      if (p1) return p1;

      return numbers;
    }
  );
};

export const formatInputValue = (value: string, type?: string): string => {
  if (!type || type === 'text') return value;

  switch (type) {
    case 'phone':
      return formatPhone(value);
    case 'cellphone':
      return formatCellphone(value);
    case 'cpf':
      return formatCpf(value);
    case 'cnpj':
      return formatCnpj(value);
    case 'cep':
      return formatCep(value);
    case 'monetary':
      return formatMonetary(value);
    case 'date':
      return formatDate(value);
    case 'credit-card':
      return formatCreditCard(value);
    default:
      return value;
  }
};
