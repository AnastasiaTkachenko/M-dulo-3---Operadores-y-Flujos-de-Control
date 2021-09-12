const product = {
   count: 3,
   price: 12.55, 
   type: "ropa",};

/*  VARIANT IF ELSE STATEMENT 
let getTotal;  
if (product.count > 0) {
   getTotal = product.count * product.price;
} else {
   getTotal = 0
}; 
 */

// VARIANT TERNARY OPERATOR 
let getTotal = (product) => product.count > 0 ? product.count * product.price : 0; 
console.log('Precio sin IVA es :' + getTotal(product)); 

let getVat; 
 switch(product.type) {
 case 'alimentacion' : getVat = 0.10; 
 break; 
 case 'libro' : getVat = 0.04;
 break; 
 default: getVat = 0.21; 
}
console.log(' % de IVA aplicable : ' + getVat); 

const iva = getTotal(product) * getVat; 
console.log('Precio de IVA es : ' + iva); 

// FUNCTION EXPRESSION 
const precioConIva = getTotal(product) + iva; 
console.log('Precio con IVA es :' + precioConIva); 
 

// FUNCTION DECLARATION
function getTotalVat(product) {
   return getTotal(product) + iva;
 }
 console.log(getTotalVat(product)); 

 function printProductPrice(product) {
   let subtotal = getTotal(product);
   let vat = getTotalVat(product);
   let total = subtotal + vat;


   console.log("Subtotal:", subtotal + "€");
   console.log("IVA:", vat + "€");
   console.log("Total:", total + "€");
 }

printProductPrice(product);



// Calcular sueldo neto en nómina 

 const empleado = {
   bruto: 14500,
   hijos: 2,
   pagas: 14,
 };

 const calcSalary = (empleado) => {
   let vat; 
   if (empleado.bruto < 12000) {
       vat = 0;
   } else if (empleado.bruto < 24000) {
      vat = 0.08;
   }  else if (empleado.bruto < 34000) {
      vat = 0.16;
   }  else  {
      vat = 0.30;
   }
   
   vat = empleado.hijos && vat ? vat - 0.02 : vat; 
   return (empleado.bruto - vat * empleado.bruto) / empleado.pagas; 
   
}
console.log(calcSalary(empleado)); 






