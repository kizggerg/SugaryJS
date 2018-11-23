import define from "./stages/Define";
import parse from "./stages/Parse";
import desugar from "./stages/Desugar";
import output from "./stages/Output";

export default function SugaryJS(ejsCode, sugar) {
    let astDefinition = define(sugar);
    let ejsAST = parse(ejsCode, astDefinition);
    let jsAST = desugar(ejsAST, sugar.syntax, sugar.semantics);
    let jsCode = output(jsAST);
    return jsCode;
}