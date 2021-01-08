/* 

Here's another prompt (like sortList.js) that can utilize Floyd's algorithm,
aka slow-and-fast pointers, aka tortoise and hare.


For more detailed walkthroughs: 
    Gayle Laakmann McDowell explains: https://www.youtube.com/watch?v=MFOAbpfrJ8g
    Java walkthrough (easy to translate to JS): https://www.youtube.com/watch?v=6OrZ4wAy4uE

*/

var linkedListHasCycle = function(head) {

    if(head == null) return false;

    let slow = head;
    let fast = head;

    while(slow != null && fast !=null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            return true;
        }
    }
    return false;
    
};

