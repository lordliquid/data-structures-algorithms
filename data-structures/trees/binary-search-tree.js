function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
};

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
console.log(bst);


// DEPTH FIRST SEARCH 

function dfs(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

// IN ORDER TRAVERSAL

function inorder(node){
   if(node){
      inorder(node.left);
      console.log(node.value);
      inorder(node.right);
   }
}

// MIN && MAX

function minNode(node){
   if(!node){
      return 0;
   }
   if(node.left){
     return minNode(node.left);
  }
  return node.value;
}

function maxNode(node){
   if(!node){
     return 0;
  }
  if(node.right){
     return maxNode(node.right);
  }
  return node.value;
}

// HEIGHT OF TREE

function height(node){
   if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

// PRINT ANCESTOR 

function printAncestor(node, target){
   if(!node) return false;

   if(node.value == target) return true;
   
   if(printAncestor(node.left, target) || printAncestor(node.rigth, target)){
     console.log(node.value);
     return true;
  }

  return false;
}

// COMMON ANCESTOR FOR BINARY TREE

function commonAncestorBT(node, n1, n2){
   if(!node) return;
   var val = node.value;
   if(n1 == val || n2 ==val){
     return node;
   }
   var left = commonAncestorBT(node.left, n1, n2);
   var right = commonAncestorBT(node.right, n1, n2);
   if(left && right){
     return node;
  }
  return (left) ? left : right;
}
      