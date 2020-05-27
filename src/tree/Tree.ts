export class Tree<T> {
    public left: Tree<T> | null;
    public right: Tree<T> | null;
    public root?: Tree<T>;
    public list: Tree<T>[] = [];
    private data: T;

    constructor(data: T, left?: Tree<T>, right?: Tree<T>) {
        this.data = data;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }

    public create(list: T[]) {
        this.list = [];
        for (const el of list) {
            this.list.push(new Tree<T>(el));
        }
        this.root = this.list[0];
        for (let i = 0; i < list.length / 2; i++) {
            this.list[i].left = this.list[i * 2 + 1];
            if (i * 2 + 2 < this.list.length) {
                this.list[i].right = this.list[i * 2 + 2];
            }
        }
    }

    /**
     * 前序遍历
     * @param root
     */
    public preOrder(root: Tree<T> | null) {
        if (root !== null) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    /**
     * 中序遍历
     * @param root
     */
    public inOrder(root: Tree<T> | null) {
        if (root !== null) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    /**
     * 后序遍历
     * @param root
     */
    public afterOrder(root: Tree<T> | null) {
        if (root !== null) {
            console.log(root.data);
            this.afterOrder(root.left);
            this.afterOrder(root.right);
        }
    }
}
