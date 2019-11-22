// Breadth-First Search
// A traversing algorithm for searching tree or graph data structures. Starting at 
// the root node, BFS explores all of the neighbor nodes at the present depth prior 
// to moving on to the nodes at the next depth level.

// Time Complexity: O(n ^ 2)
// Space Complexity: O(n ^ 2)

function breadthFirstArray(root) {
    let stack = [root];
    let ans = []

    while (stack.length) {
        let node = stack.shift();
        ans.push(node.val)


        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return ans;
}