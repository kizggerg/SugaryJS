import generate from "babel-generator"

export default function output(desugaredAST) {
    return generate(desugaredAST).code;
}