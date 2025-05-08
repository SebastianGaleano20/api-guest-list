type Status = "CONFIRMED" | "PENDING" | "CANCELED";
export type ConfirmedGuest = { name: string; confirmed: boolean };
export interface Guest {
  id?: Number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  status: Status;
  token: string;
  confirmedGuests?: ConfirmedGuest[];
  musicSuggestion?: string[];
}
export interface Admin {
  id?: Number;
  name: string;
  email: string;
  password: string;
  image: string;
}
