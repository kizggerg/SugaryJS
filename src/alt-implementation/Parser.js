import EBNFParser from "./EBNF-Parser"

export default class SugaryDefine {
    constructor() {
        // Parses the JavaScript EBNF to create a JS AST.
        this.jsAST = EBNFParser.parse("path/to/JS/EBNF");
    }
    
    defineAST(ebnfExtension) {
        let resultASTDef = Object.assign({}, this.jsAST);
        let astAddition = EBNFParser.parse(ebnfExtension);
        let nodeWithSameType = resultASTDef.getNode(astAddition)
        
        if (nodeWithSameType !== null) {
            // The user is extending an existing JS node.
            nodeWithSameType.childern.push(astAddition);
        }
        else {
            // The user is adding an existing JS node
            resultAST.childern.push(astAddition);
        }

        return resultASTDef;
    }   
}