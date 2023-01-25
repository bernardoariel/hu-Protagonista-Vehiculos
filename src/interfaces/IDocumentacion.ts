export interface IDocumentacion {
    nameRoute:string;
    nextRoute:string;
    previousRoute?:string;
    titulo:string;
    subtitulo:string;
    pregunta1:string;
    toogleButtonDefault:string;
    labeldescripcion:string;
    vencimientoDoc:boolean;
    fecha?:Date | string;
    txtDescripcion?:string;
}