type Status = "CONFIRMED" | "PENDING" | "CANCELED";
export interface Guest {
  id?: Number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  status: Status;
  companion?: string[];
  musicSuggestion?: string[];
}
export interface Admin {
  id?: Number;
  name: string;
  email: string;
  password: string;
  image: string;
}
