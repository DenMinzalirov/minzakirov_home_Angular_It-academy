//Let's keep it simple and only add the following methods to the Map:

// setItem(key: string, item: T) // should create a new key-value pair
 
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

class MyMap<T> {
    items: { [x: string]: T; };
    constructor(){
        this.items = {};
    };
    setItem (key: string, item: T){
        this.items[key] = item;
    };
    getItem(key: string){
        console.log(`${key}`,this.items[key]);
    };
    clear (){
        this.items = {};
    };
    printMap (){
        console.log('items',this.items);
    }
}


const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();
