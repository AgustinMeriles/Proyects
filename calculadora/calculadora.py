#!/usr/bin/python3

def suma(a, b):
    return (a + b)

def resta(a,b):
    return(a - b)

def multiplicacion(a, b):
    return (a * b)

def division(a, b):
    return(a / b)

a = int(input('Ingrese el primer número: '))
b = int(input('Ingrese el segundo número: '))
operacion = input('Ingrese una operación(suma, resta, multi o divi): ')
if operacion == 'suma':
    print (suma(a,b))
elif operacion == 'resta':
    print (resta(a,b))
elif operacion == 'multi':
    print (multiplicacion(a,b))
elif operacion == 'divi':
    print (division(a,b))