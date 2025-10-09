type Status = "PENDING" | "CONFIRMED" | "CANCELED";
export type GuestTokenPayload = {
  guestId: number;
  firstName: string;
};

export type GuestRefreshTokenPayload = {
  guestId: number;
};
export interface Guest {
  firstName: string;
  lastName: string;
  status: Status;
  token: string;
  confirmedGuests?: string;
  musicSuggestion?: string;
}
export type GuestLoginResult = {
  guest: Guest; // invitado validado
  accessToken: string; // JWT de acceso
  refreshToken: string; // JWT de refresco
};
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
