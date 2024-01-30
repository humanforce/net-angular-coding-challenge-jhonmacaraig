import { Injectable } from "@angular/core";

@Injectable()
export class HFDateFormatterService {

  static parseLocalDate = (value: string): Date => {
    return new Date(value);
  }

  static formatToLocalDateTime = (value:Date): string => {
    return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
  }

  static formatToLocalDate= (value: Date): string => {
    return `${value.toLocaleDateString()}`;
  }

  static formatToLocalTime = (value: Date): string => {
    return `${value.toLocaleTimeString()} `;
  }
}
