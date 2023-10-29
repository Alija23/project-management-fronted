export interface ErrorResponseModel {
    statusCode: number;
    timestamp: string;
    message: string;
    description: string;
    status: StatusField[]; 
  }
  
  export interface StatusField {
    fieldName: string;
    errorMessage: string;
  }

  export interface InputStatus {
    errorMessage: string
    status: boolean;
}