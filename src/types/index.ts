type Status = "PENDING" | "CONFIRMED" | "CANCELED";

export interface Guest {
  firstName: string;
  lastName: string;
  status: Status;
  token: string;
  confirmedGuests?: string;
  musicSuggestion?: string;
}
export interface Admin {
  name: string;
  email: string;
  password: string;
  image: string;
}

export type AdminTokenPayload = {
  id: number;
  name: string;
  email: string;
  image: string;
};
