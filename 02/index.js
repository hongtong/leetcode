var addTwoNumbers = function(l1, l2) { 
    var add = 0;
    var headnode = null;
    var ans = null;
    
    while (l1 || l2) {
        v1 = l1?l1.val:0;
        v2 = l2?l2.val:0;
        var  sub = v1+v2+add;
        add = (v1+v2+add)>9 ? 1:0;
        curnode = new ListNode(sub % 10);
        
        !ans && (ans = curnode);
        headnode && (headnode.next = curnode);
        headnode = curnode;
        
        
        l1 = l1?l1.next :null;
        l2 = l2?l2.next :null;
    }

    if(add) {
        headnode.next = new ListNode(1);
    }

    return ans;
};