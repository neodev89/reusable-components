    import path from "path";

    export const joinPaths = (
        fileName: string, 
        nestedDir1?: string, 
        nestedDir2?: string
    ) => {
        
        const basePath = [process.cwd(), "src", "content"];

        if (nestedDir1) basePath.push(nestedDir1);
        if (nestedDir2) basePath.push(nestedDir2);
        
        basePath.push(fileName);

        return path.join(...basePath);
    }

