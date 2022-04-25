"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kvstorage_1 = require("./kvstorage");
describe('Test Store', () => {
    it('Can add a new key-value pair to Store', () => {
        //Arrange 
        const newObject = new kvstorage_1.Store();
        const res = true;
        //Act
        const output = newObject.add({ key: 'key1', value: 5, metadata: { createdBy: 'Teodora', createdAt: new Date() } });
        //Assert
        expect(output).toBe(res);
    });
    it('Can retrieve a key-value pair including its metadata from Store', () => {
        //Arrange 
        const store = new kvstorage_1.Store();
        const newObject = store.add({ key: 'key1', value: 5, metadata: { createdBy: 'Teodora', createdAt: new Date() } });
        const res = ({ key: 'key1', value: 5, metadata: { createdBy: 'Teodora', createdAt: new Date() } });
        //Act 
        const output = store.retrieve('key1');
        //Assert
        expect(output).toStrictEqual(res);
    });
});
describe('Tests KeyValueTypes', () => {
    it('Tests that the KeyValueTypes contains metadata', () => {
        //Arrange
        const store = new kvstorage_1.Store();
        const newObj = store.add({ key: 'key1', value: 5, metadata: { createdBy: 'Teodora', createdAt: new Date() } });
        const res = ({ key: 'key1', value: 5, metadata: { createdBy: 'Teodora', createdAt: new Date() } });
        //Act
        const output = store.retrieve('key1');
        //Assert
        expect(output).toStrictEqual(res);
    });
});
