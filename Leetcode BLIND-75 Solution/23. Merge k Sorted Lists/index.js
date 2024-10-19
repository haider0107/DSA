/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeLists = [];

  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergeLists = [];
    for (let i = 0; i < lists.length; i = i + 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergeLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergeLists;
  }

  return lists[0];
};

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) {
    tail.next = list1;
  } else if (list2 !== null) {
    tail.next = list2;
  }

  return dummy.next;
};
