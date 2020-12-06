// 快慢指针

function midNode(head) {
	let fast = head, slow = head

	while(fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
	}

	return slow
}