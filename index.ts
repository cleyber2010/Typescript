/**
 * Compilando um arquivo TS para JS -> os arquivos do TS não são interpretados pelo navegador
 * COMANDO: npx tsc index.ts --noEmitOnError --outDir dist
 * Compila o arquivo para JS e a flag --noEmitOnError para a execução caso haja algum erro no arquivo TS 
 */

let fistName: string = "Cleyber";
let lastName: string = "F. Matos";

console.log(fistName + lastName);