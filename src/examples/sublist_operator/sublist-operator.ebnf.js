import Sugar from "../../sugar";

export default class sublist_operator extends Sugar {
    syntax() {
        return `
            <MemberExpression> ::= <Expression>”[“(<Expression>)?”:”(<Expression>)?”]”
        `
    }
}