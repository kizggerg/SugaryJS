import traverse from "@babel/traverse";
import * as jsParser from "@babel/parser";

export default function desugar(ejsAST, syntacticIdentifier, semanticTranslation) {
    let jsAST = Object.assign({}, ejsAST); 

    traverse(jsAST, {
        enter(path) {
            if (path.node.type === syntacticIdentifier) {
                path.replaceWith(
                    semanticTranslation(...path.node.children)
                );
            }
        }
    });

    return jsAST;
}