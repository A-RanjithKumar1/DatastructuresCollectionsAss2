class Node {
    constructor(value) {
        this.data = value
        this.nextNode = null;
    }
}
class LinkedList {
   headNode = null;
   count = 0;
    insertElement(value) {
        if (this.headNode == null) {
            this.headNode = new Node(value)
            this.count++;
        } else {
            let temp = this.headNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }

    insertAtind(value, index) {
        let new_node = new Node(value);
        if (index == 0 || this.rootNode == null) {
            new_node.nextNode = this.headNode
            this.headNode = new_node;
        }
        else {
            let flag = 0;
            let temp_index = 1;
            let temp = this.headNode;
            while (temp.nextNode != null) {
                if (index == temp_index) {
                    new_node.nextNode = temp.nextNode;
                    temp.nextNode = new_node;
                    flag = 1;
                    break;
                }
                temp_index += 1;
                temp = temp.nextNode
            }
            if(temp_index == index && flag == 0){
                    new_node.nextNode = temp.nextNode;
                    temp.nextNode = new_node;
            }
        }
    }

    removeElement(index) {
        if(index == 0){
            this.headNode = this.headNode.nextNode
        }
        else{
            let temp_index = 1;
            let temp = this.headNode
            while(temp.nextNode != null){
                if (index == temp_index) {
                    temp.nextNode = temp.nextNode.nextNode;
                    break;
                }
                temp_index += 1;
                temp = temp.nextNode;
            }
        }
    }

    printElements() {
        let temp = this.headNode;
        if (temp == null) {
            console.log("Is empty!")
        } else {
            while (temp != null) {
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
    }
}
let linkedlist = new LinkedList()
linkedlist.insertElement(10);
linkedlist.insertElement(20);
linkedlist.insertAtind(1,0);
linkedlist.insertAtind(2,1);
linkedlist.insertAtind(3,1);
linkedlist.insertAtind(5,2)
linkedlist.printElements();
console.log("After removing");
linkedlist.removeElement(4);
console.log("Printing elements");
linkedlist.printElements();