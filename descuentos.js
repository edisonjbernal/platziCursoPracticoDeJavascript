function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue);
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son: $"+precioConDescuento;
}


const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid); 

// las dos lineas anteriores son igualea a:
const userCoupon2 = coupons.find(function (coupon) {
    return coupon.name === couponValue;
}); 


if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
}