import Parser from "../parser/Parser";

/**
 * Parses the ejsCode into an EJS AST.
 * Throws InvalidEJSError if the syntax is invalid.
 * @param {string} ejsCode A string of the EJS Code to parse.
 * @returns {AST}          An EJS AST parsed from the ejsCode
 */
export default function parse(ejsCode, astDefinition) {
    try {
        return Parser.parse(ejsCode, astDefinition);
    }
    catch (error) {
        throw new InvalidEJSError(error);
    }
}

/** 
 * Thrown when the given EJS code has invalid syntax. 
 */
export class InvalidEJSError extends Error {
    constructor(...args) {
        super(args);
    }
}