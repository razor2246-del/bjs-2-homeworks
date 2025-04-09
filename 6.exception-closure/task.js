﻿function parseCount(num) {
    num = Number.parseFloat(num);
    if (Number.isNaN(num)) {
      throw new Error("Невалидное значение");
    }
    return num;
  }
  function validateCount(num) {
    try {
      return parseCount(num);
    } catch (error) {
      return error;
    }
  }
  
  class Triangle {
    constructor(a, b, c) {
      if (a >= b + c || b >= a + c || c >= a + b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
    get perimeter() {
      return this.a + this.b + this.c;
    }
    get area() {
      let p = (this.a + this.b + this.c) / 2;
      return Number(
        ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3),
      );
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        error,
      };
    }
  }
    
        
    