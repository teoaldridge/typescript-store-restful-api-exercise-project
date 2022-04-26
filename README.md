# typescript-store-restful-api-exercise-project
An exercise project, using typescript, where the user can add, retrieve and delete items from a store. I created and implemented a RESTful API as part of this project. 

# Set up:

Setting things up to work in TypeScript and using the Express framework when creating the API requires a lot of configurations. To install the dependencies for this project:
1. npm init -y
2. npm install express
3. npm install --save-dev typescript @types/express @types/node
... to run the api:
npm start
... which path to enter in Postman:
http://localhost:3003/>name_of_api_method</>key<   #the key needs to exist within the db, ie an item with that unique key name must first be added to the Postman db every time you run "npm start".  
                         
 # DESCRIPTION OF THE FILES - THEIR FUNCTIONALITY AND BUSINESS LOGIC: 

The specification for this project was to build store for key-value pairs using TypeScript. The store should allow items to be added, removed and retrieved; store metadata alongside each item (when it was added, by whom, and when it was last accessed); and allow different storage mechanisms to be used (in-memory, file, database). Additionally, the configuration files should include some automation for different npm tasks. Finally, the store should make use of a REST API for its ui logic. The below details how the different files within this directory contribute towards this spec.# kvstorage.test.ts
The test suite for unit testing our Typescript files.# kvstorage.ts

# This contains the core business logic as well as its execution.

## The "StoreInterface" 
This is a contract which ensures that the Store implements the methods as set out in the specification: the Store can add, retrieve and remove items from storage based on a unique key.

## "KeyValueTypes" 
This ensures that every item has a pre-defined shape, ie the "Store" will only accept items that have a unique key which is either a string or number, values which can be any type and metadata that is in of a specific format.

## The class "STore" 
This implements the above two contracts. It uses an empty array to store items in memory and contains methods for adding, removing and retrieving items from this array.

## server.ts 
This layer is in-between the backend/business logic of kvstorage.ts and the frontend/ui logic of the API. It creates an instance of the "Store" class which then gets used by the API. This is where the API layer attaches to the storage layer.

## app.ts
This is the API. The API maps the methods from the "Store" class against its inherent methods, ie pairs the "add" method of "Store" with the API-native POST method. It also displays the conventional API error codes when something goes awry.
        BACKEND                                                            FRONTEND
      - in-memory storage
      - file storage       kvstorage.ts  --  server.ts  --  app.ts  --  user interface
      - database storage

## To do:
1. Create a delete/remove function for the Store.
2. Refactor to separate the functionality for creating items from the functionality for managing items for the Store class (SOLID - "Separation of Concerns"). Currently the Store both creates and manages items (by performing methods on the items to add, remove or search within an array). This could be changed so that a separate class, "Items", is responsible for the creation of items and the "Store" class implements the former class, ie handles these items. The advantage of this separation is that it is more easily scalable as the logic for creating items lives elsewhere thus enabling easy swapping between item-creating classes. For example, we might want a factory that creates fruits and another factory that creates chairs. The logic of creating fruits might differ greatly from the logic of creating chairs. It would then be easier to create chairs and fruits separately from their Store class - the factory design pattern - rather than create fruits and chairs at the same time as we deal with their storage through "Store". The way it's implemented at the moment is making use of the abstract factory design pattern where we ensure that fruits are created correctly in "Store" by making use of the interface "KeyValueTypes" and we could ensure type safety when we create chairs by implementing "KeyValueTypes_for_chairs" as an interface whenever we want to make chairs instead of fruits. However, the advantage of the factory design pattern is the fact that it enables us to include business logic at the point of creating the items, ie the items exist independently of the storage units that make use of them. This change would require extensive revision of the code as it would change the logic of the methods within the "Store" class as well as the logic of StoreInterface (from making use of booleans to operating on the instances of the "Item" class.).
3. Making the test file run. Currently it isn't but it used to be able to run before we moved the files from one directory to another when we added the API logic to the kvstorage files. Moreover, we should create more unit tests when we refactor the code as per these suggestions.
4. Create the logic for the "lastAccessed" metadata including unit tests.
5. Create the file storage and database storage logic so that the user has more storage options than the in-memory storage that is currently being used (kvstorage.ts).
6. Possibly introduce stricter type safety in API layer. This could then lead to an implementation of a so-called validation step for the API input, see notes.

