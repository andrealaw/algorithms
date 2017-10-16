// A hash table (also called a hash, hash map, map, unordered map or dictionary) is a data structure that pairs keys to values.

var lightBulbToHoursOfLight = new Map();

lightBulbToHoursOfLight.set('incandescent', 1200);
lightBulbToHoursOfLight.set('compact fluorescent', 10000);
lightBulbToHoursOfLight.set('LED', 50000);

// In JavaScript, objects are also commonly used for storing key-value pairs:

var lightBulbToHoursOfLight = {
  'incandescent': 1200,
  'compact fluorescent': 10000,
  'LED': 50000,
};

/*

How do you know when to use a map or object in JavaScript? 

- Objects are used almost always
- maps might be helpful if your keys aren't strings or you need to iterate over your data. 
- Maps aren't fully supported by all modern browsers yet.

About Hash tables

- take on average O(1) time for insertions and lookups
- are unordered (the keys are not guaranteed to stay in the same order)
- can use many types of objects as keys (JavaScript object keys are always strings)
- Hash tables can be thought of as arrays, if you think of array indices as keys!

In fact, hash tables are built on arrays. So if you ever want to use a hash table but know your keys will be sequential integers (like 1..1001..100), you can probably save time and space by just using an array instead.

Note: hash tables have an average case insertion and lookup cost of O(1)O(1). 
the average-case cost and the worst case cost are not really the same. 
Because of hash collisions and rebalancing, a hash table insertion or lookup can cost as much as O(n) time in the worst case. 
But usually in industry we assume hashing and resizing algorithms are clever enough that 
collisions are rare and cheap.

 */