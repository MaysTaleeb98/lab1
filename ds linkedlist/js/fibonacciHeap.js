
class node {


constructor(degree=0,mark= false,parent=null,left,right, child=null , key= Integer.MAX_VALUE){
    this.degree = degree;
    this.mark = mark;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.child = child;
    this.key = key;

} 

    node( x) {
        this();
        this.key = x;
    }

    set_parent(x) {
        this.parent = x;
    }

    get_parent() {
        return this.parent;
    }

    set_left( x) {
        this.left = x;
    }

    get_left() {
        return this.left;
    }

    
  set_right( x) {
    this.right = x;
}

get_right() {
    return this.right;
}


  set_child( x) {
    this.child = x;
}

get_child() {
    return this.child;
}

  set_degree( x) {
    this.degree = x;
}

get_degree() {
    return this.degree;
}

 set_mark(m) {
    this.mark = m;
}

get_mark() {
    return this.mark;
}

set_key( x) {
    this.key = x;
}

get_key() {
    return this.key;
}


}
 