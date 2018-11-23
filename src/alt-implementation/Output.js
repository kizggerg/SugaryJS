export function output(ast) {
    const generateSourceCode = (nodes, accumulator) => {
        if (nodes.length === 0) {
            return accumulator;
        }
        const first = nodes[0];
        const rest = nodes.slice(1);

        return generateSourceCode([...first.Children, ...rest], 
                                  accumulator + first.getSourceCode());
    }

    return generateSourceCode([ast], "");
}