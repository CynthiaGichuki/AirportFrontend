
export interface User{
    Name:string
    Email:string
    Password:string
}

export interface Message{
    message:string
}

export interface LoginUser{
    Email:string
    Password:string
}

export interface LoginSuccess{
    message:string
    token:string
    role:string
    name:string
}

export interface Booking{
    Id:string
    Name:string,
    Email:string
    Destination:string
    TravelDate:string
}

export interface AddBooking{
    Destination:string
    TravelDate:string
}
export interface AuthState {
    isLoggedIn: boolean
    loading: false
    Id:string,
    Name:string,
    Email:string,
    Password:string,
    user: LoginSuccess | null
    errorMessage: string | null
  }
  export interface Logged {
    Name:string
    Email:string
    Password:string
    errorMessage: string | null
  }