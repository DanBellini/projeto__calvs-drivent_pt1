export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  cep?: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  ibge?: string,
  gia?: string,
  ddd?: string,
  siafi?: string
};

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};
