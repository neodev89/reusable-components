import path from "path";

export const joinPaths = (resource: string, fileName: string) => {
    const filePath = path.join(process.cwd(), "src", "content", resource, fileName);
    return filePath;
}