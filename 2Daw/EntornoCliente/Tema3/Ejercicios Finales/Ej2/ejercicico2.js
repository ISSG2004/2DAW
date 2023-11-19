function coche(modelo, color, kms, combustible){
    this.modelo=modelo;
    this.color=color;
    this.kms=kms;
    this.combustible=combustible;
}
var elMio=new coche("Mercedes E330","negro",120000,"diesel");
var elTuyo=new coche("BMW 318", "blanco", 210000,"gasolina");

delete elMio.kms;