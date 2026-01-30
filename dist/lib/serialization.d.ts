/// <reference types="node" />
type Serializer = ((value: any, buffer: Buffer, offset: number) => void) | ((value: any, buffer: Buffer, offset: number, maxLen: number) => void);
/**
 * A dictionary containing functions that serialize a certain value based on the field type
 */
export declare const SERIALIZERS: {
    [x: string]: Serializer;
};
type Deserializer = ((buffer: Buffer, offset: number) => any) | ((buffer: Buffer, offset: number, length: number) => any);
type Deserializers = {
    [key: string]: Deserializer;
};
/**
 * A dictionary containing functions that deserialize a certain value based on the field type
 */
export declare const DESERIALIZERS: Deserializers;
export {};
//# sourceMappingURL=serialization.d.ts.map