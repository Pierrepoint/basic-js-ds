const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;

    if (node === null) {
      this.rootNode = new Node(data);
      return;
    } else {
      const srchT = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return srchT(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return srchT(node.right);
          }
        } else {
          return null;
        }
      };
      return srchT(node);
    }
  }

  has(data) {
    let cur = this.rootNode;

    while (cur) {
      if (data === cur.data) {
        return true;
      }
      if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return false;
  }

  find(data) {
    let cur = this.rootNode;

    while (cur.data !== data) {
      if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
      if (cur === null) {
        return null;
      }
    }
    return cur;
  }

  remove(data) {
    const rmvNd = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        var tnd = node.right;
        while (tnd.left !== null) {
          tnd = tnd.left;
        }
        node.data = tnd.data;
        node.right = rmvNd(node.right, tnd.data);
        return node;
      } else if (data < node.data) {
        node.left = rmvNd(node.left, data);
        return node;
      } else {
        node.right = rmvNd(node.right, data);
        return node;
      }
    };
    this.rootNode = rmvNd(this.rootNode, data);
  }

  min() {
    let cur = this.rootNode;

    while (cur.left !== null) {
      cur = cur.left;
    }
    return cur.data;
  }

  max() {
    let cur = this.rootNode;

    while (cur.right !== null) {
      cur = cur.right;
    }
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree,
};
