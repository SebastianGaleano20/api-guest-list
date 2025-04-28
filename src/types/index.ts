type Status = "CONFIRMED" | "PENDING" | "CANCELED";
export interface Guest {
  id?: Number;
  name: String;
  lastName: String;
  email: String;
  phone: String;
  image: String;
  status: Status;
  companion?: String[];
  musicSuggestion?: String[];
}
export interface Admin {
  id?: Number;
  name: String;
  email: String;
  password: String;
  image: String;
}
