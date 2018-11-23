/** 
 * Defines a Syntactic Sugar in SugaryJS.
 */
export default class Sugar {
    /** 
     * Returns a string containing the EBNF of the syntax
     * for the sugar. 
     */
    syntax() {
        throw new Error("Unimplemented Syntax!");
    }

    /**
     * Returns a string containing the unparsed non-terminals 
     * and returns the string output of the program.
     */
    semantics(...args) {
        throw new Error("Unimplemented Semantics!");
    }
}