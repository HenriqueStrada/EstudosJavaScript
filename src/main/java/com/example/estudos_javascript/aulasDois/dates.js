// var date = new Date();
//Dia do mes!
//alert(date.getDate());

//Dia da semana
//alert(date.getDay());

// alert(date.getFullYear());

// alert(date.getMinutes());

var date = new Date('11/08/2020');

var date2 = new Date('11/10/2020');

var diferenca = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24);
alert(diferenca);
