import axios from "axios";
import { requestError } from "@/errors";
import { ViaCEPAddress } from "@/protocols";

async function get(url: string) {
  try {
    const result = await axios.get(url);

    const mock: ViaCEPAddress = {
      logradouro: result.data.logradouro,
      complemento: result.data.complemento,
      bairro: result.data.bairro,
      localidade: result.data.localidade,
      uf: result.data.uf,
    }
    return mock;
  } catch (error) {
    const {
      status,
      statusText
    } = error.response;

    return requestError(status, statusText);
  }
}

export const request = {
  get,
};

