import { isValidName } from "./validationUtils";
import { describe,it,expect } from "vitest";

describe('isValidName function', () => {
    // Prueba para nombres con longitud válida
    it('should return true for names with length between 5 and 20 characters', () => {
      expect(isValidName('ValidName')).toBe(true);
      expect(isValidName('NameWith19Characte')).toBe(true); 
    });
  
    it('should return false for names with length less than 5 or more than 20 characters', () => {
      expect(isValidName('Shor')).toBe(false);
      expect(isValidName('ThisNameIsWayTooLongAndInvalid')).toBe(false); 
    });
  
    // Prueba para nombres con y sin caracteres especiales
    it('should return false for names with special characters', () => {
      expect(isValidName('Invalid_Name')).toBe(false); 
      expect(isValidName('Invalid.Name')).toBe(false); 
      
    });
  
    it('should return true for names without special characters', () => {
      expect(isValidName('JustLetters')).toBe(true);
      expect(isValidName('Numbers123')).toBe(true); 
    });
  
    // Prueba para nombres con diferentes cantidades de números
    it('should return true for names with up to 3 numbers', () => {
      expect(isValidName('Name1')).toBe(true);
      expect(isValidName('1Name23')).toBe(true); 
    });
  
    it('should return false for names with more than 3 numbers', () => {
      expect(isValidName('Name1234')).toBe(false);
      expect(isValidName('4Numbers1234')).toBe(false); 
    });
  
    // Prueba para nombres que son solo números
    it('should return false for names that are only numbers', () => {
      expect(isValidName('12345')).toBe(false);
      expect(isValidName('67890')).toBe(false);
    });
  });

