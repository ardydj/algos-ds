/*
Reversing a linked list is a very common interview prompt both on its own, or as part of a larger problem.

Cut to the chase with the ES6 solution below, or go deeper by reviewing these excellent walkthroughs:

Recursive and iterative walkthroughs: https://www.youtube.com/watch?v=O0By4Zq0OFc
Recursive focus: https://www.youtube.com/watch?v=MRe3UsRadKw
Iterative focus: https://medium.com/javascript-in-plain-english/javascript-reverse-linked-list-a2d235d64548

*/



//Succinct ES6 solution
var reverseList = function(head) {
    let [previous, current] = [null, head]
    while (current) {
        [current.next, previous, current] = [previous, current, current.next]
    }
    return previous
}