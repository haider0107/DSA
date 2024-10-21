/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let [slow, fast] = [head, head.next];

  while (fast || fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;
  let prev = null;

  while (second) {
    let temp = second.next;
    second.next = prev;

    prev = second;
    second = temp;
  }

  let first = head;

  while (prev) {
    let [temp1, temp2] = [first.next, prev.next];

    first.next = prev;
    prev.next = temp1;

    first = temp1;
    prev = temp2;
  }
};
