import 'reflect-metadata';
export function Attachable(value:boolean = false){
    return function (target:Function) {
        Reflect.defineMetadata("Attachable",value, target);
    }
}