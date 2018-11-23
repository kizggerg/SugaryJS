export default class Parser {
    parse() {
        throw new Error("Cannot Instantiate Interface");
    }
}

export class Sugar_Implementation extends Parser {
    constructor(syntaxName, syntaxString, syntaxArgs) {
        super();

        this.syntaxName = syntaxName;
        this.syntaxArgs = syntaxArgs;
    }

    SugarExpression() {
        const node = this.startNode();

        if (!this.match(this.syntaxName)) {
            // The original syntax of the node should be used.
            return super[this.syntaxName];
        }
        else {
            // The user-defined syntax of the node should be used.
            for (syntaxArgument in this.syntaxArgs) {
                this.eat(syntaxArgument);
            }
            return this.finishNode(node, this.syntaxName);
        }
    }
}