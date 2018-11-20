import * as babylon from "babylon";
import * as esprima from "esprima";
import * as fs from "fs";

const input_code = fs.readFileSync("./src/sublist-operator.ejs", { encoding: "UTF-8"});
const expected_output_code = fs.readFileSync("./src/sublist-operator.js", { encoding: "UTF-8"});

const precurser_to_ast = esprima.tokenize(input_code);
const expected_ast = babylon.parse(expected_output_code);

console.log(precurser_to_ast );

// SEE ALSO Acorn Parser and its plugins

/**
 * TODO:
 * - Parse pipeline-operator.js
 * - Understand AST
 * 
 * - Parse pipeline-operator.ejs
 * - Transform to AST
 * - Translate AST to JS
 * - Output AST as JS
 * 
 * - Create Test Suite
 * - Implement Sublist Operating using Above
 * - Implement .ebnf.js files 
 */
