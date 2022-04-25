import {Store, KeyValueTypes} from './kvstorage';

describe('Test Store', () => {

  it('Can add a new key-value pair to Store', () => {
    //Arrange 
    const newObject = new Store();
    const res = true;
    //Act
    const output = newObject.add({key:'key1', value:5, metadata:{createdBy: 'Teodora', createdAt: new Date()}});
    //Assert
    expect(output).toBe(res);
  })



  it('Can retrieve a key-value pair including its metadata from Store', () => {
    //Arrange 
    const store = new Store();
    const newObject = store.add({key: 'key1', value: 5, metadata:{createdBy: 'Teodora', createdAt: new Date()}});
    const res: KeyValueTypes = ({key: 'key1', value: 5, metadata:{createdBy: 'Teodora', createdAt: new Date()}});
    //Act 
    const output = store.retrieve('key1');
    //Assert
    expect(output).toStrictEqual(res);

  })
});

describe('Tests KeyValueTypes', () => {
  it ('Tests that the KeyValueTypes contains metadata', () => {
    //Arrange
    const store = new Store(); 
    const newObj = store.add({key: 'key1', value: 5, metadata:{createdBy: 'Teodora', createdAt: new Date()}});
    const res: KeyValueTypes = ({key: 'key1', value: 5, metadata:{createdBy: 'Teodora', createdAt: new Date()}});
    //Act
    const output = store.retrieve('key1');
    //Assert
    expect(output).toStrictEqual(res);
  })
})

