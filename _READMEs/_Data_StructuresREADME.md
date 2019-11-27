ABSTRACT DATA TYPES (ADTs)

STACK
QUEUE
LINKED LIST
BINARY TREE
GRAPH
HEAP
TRIE


STACK - LIFO
	A container of objects that are inserted and removed according to a last-in first-out (LIFO) principle. Elements can only be added and removed from the top.

QUEUE - FIFO
	A container of objects that are inserted and removed according to a first-in first-out (FIFO) principle. A queue's only two operations are enqueue (to insert an element onto the back of the queue), and dequeue (to remove the frontmost element).

LINKED LIST
	A linear data structure where each element is a separate object (node). Each element of the list comprises of two items: the data and the reference to the next node. The last node has reference to null. The entry point into a linked list is called the head. A Linked List can be singly-linked, or doubly-linked where nodes consist of data, next, and prev.

TREE
	A nonlinear data structure composed of nodes that hold data. These nodes are connect by edges that define a parent and child relationship. Trees are not organized sequentially, instead they are organized through relationships or hierarchy.
	
	CHARACTERISTICS:
		Full - every node has either zero or two children, nodes do not have only one child.
		
		Complete - every level in the tree is fully filled with the possible exception of the last  level, which should be filled from left to right.
		
		Perfect - is both full and complete, and must have 2^(n-1) nodes.
	TYPES:
		Binary Tree - A tree where all nodes have a maximum of two children.
		
		Binary Search Tree - A tree where every node follows the ordering principle: 
			left descendants <= n < right descendants
			Time complexity: O(log n)
		
GRAPH
	A nonlinear data structure consisting of nodes and edges. The nodes (also referred to as vertices) are connected by edges (lines).
	
	Differences from a tree: A graph can have undirectional and bidirectional paths between nodes, while a tree can only have one path between two vertices (nodes). In a tree, there is only one root node and every child can only have one parent, while in a graph there is no root node.
	
HEAP
	A complete tree in which all nodes are in a specific order. A heap is a maximally efficient implementation of a priority queue.
	TYPES:
		Max-Heap - The root node must be greater than all of its children. The value of each node is less than or equal to the value of its parent. The same must be recursively true for all sub-trees in the Binary Tree.
		
		Min-Heap:  The root node must be less than all of its children. The value of each node is greater than or equal to the value of its parent. The same must be recursively true for all sub-trees in the Binary Tree.

TRIE
A tree-like data structure whose nodes store the letters of an alphabet. Words and strings can be retrieved from the structure by traversing down a branch path. Tries ALWAYS HAVE an empty root node, with links to other nodes for each alphabetic value. The number of child nodes is directly connected to how many values are possible.