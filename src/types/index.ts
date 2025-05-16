type Status = "PENDING" | "CONFIRMATED" | "CANCELED";

export type ConfirmedGuest = { name: string; confirmed: boolean };
export interface Guest {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  status: Status;
  token: string;
  confirmedGuests: ConfirmedGuest[];
  musicSuggestion: string[];
}
export interface Admin {
  name: string;
  email: string;
  password: string;
  image: string;
}
