var LinkedList = function(){

  this.head = null; // head of list

  /* Linked list Node */
  function Node(data){
    this.data = data;
    this.next = null;
  }

  /* Utility Functions */
  /* Insert a new node in front of the list */
  this.push = function(data){
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  };
};