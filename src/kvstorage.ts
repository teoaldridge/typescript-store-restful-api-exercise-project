type KeyValueTypes = { 
  key: string | number,
  value : any

  metadata?: {
    createdAt: Date, 
    createdBy: string, 
    lastAccessed?: Date | null
  }
}

interface StoreInterface {
  add(kvt: KeyValueTypes) : boolean,
  contains(key:string | number): boolean,
  retrieve(key:string | number): KeyValueTypes | null
  // remove(key: string | number): boolean;
}

class Store implements StoreInterface {

  store:KeyValueTypes[];

  constructor(){
    this.store = new Array();
  }

  contains(key: string | number): boolean {
    return this.store.some((kvt) => kvt.key == key);
  }

  add(kvt:KeyValueTypes){
    if (!this.contains(kvt.key)) {
      this.store.push(kvt);
      return true; 
    }
    return false;
    //add metadata!
  }

  retrieve(key: string | number): KeyValueTypes | null {
    if(!this.contains(key)){
      return null
    }
    return this.store.filter((kvt) => kvt.key == key)[0];
  }
};  
    
export {Store, KeyValueTypes, StoreInterface}

    
