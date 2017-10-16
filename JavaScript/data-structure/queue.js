/*

Time complexity: 
Insert   O(1)
Delete   O(1)
Read     O(1)
Search   O(1)

Space complexity: O(1);

*/

function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}
 
Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
  this.storage[this.newestIndex] = data;
  this.newestIndex++;
};
 
Queue.prototype.dequeue = function() {
  var oldestIndex = this.oldestIndex,
      newestIndex = this.newestIndex,
      deletedData;

  if (oldestIndex !== newestIndex) {
    deletedData = this.storage[oldestIndex];
    delete this.storage[oldestIndex];
    this.oldestIndex++;

    return deletedData;
  }
};